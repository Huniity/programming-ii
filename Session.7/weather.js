const fs = require('fs');
const apiKey = "420d09acc52e6d718e9ac4cb1931741f"
const cities = ['London', 'Tokyo', 'Paris'];

async function fetchCity(city) {
  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`);
    if (!response.ok) throw new Error('Failed to fetch');
    const data = await response.json();
      return {
        city: data.name,
        temp: data.main.temp,
        humidity: data.main.humidity,
      };
  } catch (error) {
    console.error(`${city}: couldn't be fetch`, error.message);
    return {
      city: city,
      error: error.message,
    }
  }
}

async function fetchCities() {
  const promises = cities.map(city => fetchCity(city));
  const results = await Promise.all(promises);

  
  console.log(results);
  console.log("Data has been successfuly logged into weather.json")

  results.sort((a, b) => a.temp - b.temp);
  console.log("Cities sorted by temperature (°C):");
  results.forEach(city => console.log(`${city.city}: ${city.temp}°C`));
}

fetchCities();


