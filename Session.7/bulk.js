console.time("bulk")
const fs = require('fs');
const kToC = (kelvin) => (kelvin - 273.15).toFixed(1);

try {
    const rawData = fs.readFileSync('weather_14.json', 'utf-8'); //read bullshit json
    const fixedJson = rawData
        .trim() // remove spaces/tab/newline
        .split("\n") // splits in array using breakline \n
        .map(line => JSON.parse(line)); //convert each line into JSON object
    fs.writeFileSync('fixed_bulk.json', JSON.stringify(fixedJson, null, 2)); //rewrite proper json

    const dataMap = new Map(); 

    fixedJson.forEach(entry => { // remap json
        dataMap.set(entry.city.name, {  
            temp: Number(kToC(entry.main.temp)), // city (key) -> {temp (key) : value }
            wind: Number(entry.wind.speed) // city (key) -> {wind (key) : value }
         }) 
    });

    const sortCool = Array.from(dataMap.entries()) // sorting
        .sort((a, b) =>  a[1].temp - b[1].temp)
        .slice(0, 3);
    const top3Cool = Object.fromEntries(sortCool);

    const sortHot = Array.from(dataMap.entries()) // sorting
        .sort((a, b) =>  b[1].temp - a[1].temp)
        .slice(0, 3);
    const top3Hot = Object.fromEntries(sortHot);

    const sortWind = Array.from(dataMap.entries()) // sorting
    .sort((a, b) =>  b[1].wind - a[1].wind)
    .slice(0, 3);
    const top3Wind = Object.fromEntries(sortWind); 

    const dataObj = Object.fromEntries(dataMap); //convert from list to object with key/value pairs

    console.log(dataObj);
    console.log("\nCoolest Cities now");
    console.log(sortCool.map(([city, value], index) => `${index + 1}. ${city}: ${value.temp}°C`).join('\n'));
    console.log("\nHottest Cities now");
    console.log(sortHot.map(([city, value], index) => `${index + 1}. ${city}: ${value.temp}°C`).join('\n'));
    console.log("\nWindiest Cities now");
    console.log(sortWind.map(([city, value], index) => `${index + 1}. ${city}: ${value.wind}m/s`).join('\n'));

    fs.writeFileSync('bulk.json', JSON.stringify({top3Cool, top3Hot, top3Wind, dataObj}, null, 2)); // write the clear data - city/temp
    console.log("\nData has been successfuly logged into bulk.json\n")
} catch (error) {
    console.error('Error:', error.message);
}

console.timeEnd("bulk")