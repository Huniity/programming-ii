import fetch from 'node-fetch';
import { getLogger } from './logger.js';
import { WEATHER_CODES } from './utils.js';
import { fetchActivitySuggestion } from './genAI.js';
import { getGeoLocation } from './api_geocode.js';
import { weatherEmojis } from './utils.js';

const logger = getLogger('WEATHER', './winston.logs/weather.logs');
const code_list = WEATHER_CODES;
  
/**
 * Fetch weather data and activity suggestion
 * @async
 * @function getWeatherActivity
 * @param {string} city - City name given in args by user
 * @returns {Promise<Array> weather: {temperature: number, condition: string, country: string}, activity: string} - Weather and activity data
 * @throws {Error} No Fetch, No Geolocalisation
 */

export async function getWeatherActivity(city) {
  try {

    const { latitude, longitude, country } = await getGeoLocation(city);
    

    const weatherRes = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
    );
    if (!weatherRes.ok) throw new Error(`⚠️ Failed to fetch. HTTP Error code: ${res.status} ⚠️`);
    const weatherData = await weatherRes.json();
    const current = weatherData.current_weather;
    const weatherInfo = code_list[current.weathercode];
    
    const activitySuggestion = await fetchActivitySuggestion(weatherInfo.condition,city);

    const conditionEmoji = weatherEmojis[weatherInfo.condition] || "🌍";
     const tableData = {
      "Weather Info": {
        "🏙️  City": city,
        "🌎 Country": country,
        "🌡️  Temperature": `${current.temperature}°C`,
        "🌦️  Condition": `${weatherInfo.condition} ${conditionEmoji}`,
        "🔢  Weather Code": current.weathercode,
        "🎯 Suggested Activity": activitySuggestion
      }
    };

    console.table(tableData);


    return {
      weather: {
        temperature: current.temperature,
        condition: weatherInfo.condition,
        country
      },
      activity: activitySuggestion
    };
    
  } catch (error) {
    logger.error(`❌ Weather error: ${error.message} ❌`);
    throw error;
  }
}
