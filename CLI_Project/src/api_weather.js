import fetch from 'node-fetch';
import { getLogger } from './logger.js';
import { WEATHER_CODES } from './utils.js';
import { fetchActivitySuggestion } from './genAI.js';

const logger = getLogger('WEATHER', '../winston.logs/weather.logs');
const code_list = WEATHER_CODES;
  

export async function getWeatherActivity() { //(city)
  try {
    // Get coordinates
    const city = "Cancun";
    const geoRes = await fetch(
      `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1`
    );
    const geoData = await geoRes.json();
    
    if (!geoData.results?.length) throw new Error('City not found');
    const { latitude, longitude, country } = geoData.results[0];
    console.log(geoData.results[0])
    
    // Get weather
    const weatherRes = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
    );
    if (!weatherRes.ok) throw new Error(`Failed to fetch. HTTP Error code: ${res.status}`);
    //const activitySuggestion = await fetchActivitySuggestion(current.weathercode);
    const weatherData = await weatherRes.json();
    
    const current = weatherData.current_weather;
    const weatherInfo = code_list[current.weathercode];
    
    const activitySuggestion = await fetchActivitySuggestion(weatherInfo.condition,city);
    
      console.log(`Weather in ${city}, ${country}:`);
      console.log(`Condition: ${weatherInfo.condition}`);
      console.log(`Weather Code: ${current.weathercode}`);
      console.log(`Suggested Activity: \n${activitySuggestion}`);

    return {
      weather: {
        temperature: current.temperature,
        condition: weatherInfo.condition,
        country
      },
      activity: activitySuggestion
    };
    
  } catch (error) {
    logger.error(`Weather error: ${error.message}`);
    throw error;
  }
}
// getWeatherActivity()
