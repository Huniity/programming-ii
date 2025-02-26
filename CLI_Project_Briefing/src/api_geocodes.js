import { getLogger } from "./logger.js";
const logger = getLogger("GEOCODE", `/winston.logs/geo.logs`);

/**
 * GeoLocation API CALL
 * 
 * @async
 * @function getGeoLocation
 * @param {string} city - City name given in args by user
 * @returns {Promise<Object>} Returns Lat, Lon and Country
 * @throws {Error} No city, No Fetch
 */

export async function getGeoLocation(city) {
    try {
        const geoRes = await fetch(
            `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1`);
        if (!geoRes.ok) throw new Error(`⚠️ Failed to fetch. HTTP Error code: ${res.status} ⚠️`);
            const geoData = await geoRes.json();
        if (!geoData.results?.length) throw new Error('❌ City not found ❌');

        return geoData.results[0];
    } catch (error) {
        logger.error(` ❌Geolocation error: ${error.message} ❌`);
        throw error;
    }
}

/**
 * GeoCode API CALL
 * 
 * @async
 * @function getGeoCode
 * @param {string} city - City name given in args by user
 * @returns {Promise<Object>} Returns country code in lowercase (otherwise can't read for news API) and country
 * @throws {Error} No city, No Fetch
 */

export async function getGeoCode(city) {
    try {
        const geoRes = await fetch(
            `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1` );
        if (!geoRes.ok) throw new Error(`⚠️ Failed to fetch. HTTP Error code: ${res.status} ⚠️`);
            const geoData = await geoRes.json();
        if (!geoData.results?.length) throw new Error('❌ City not found ❌');
        return {
            countryCode: geoData.results[0].country_code.toLowerCase(),
            countryName: geoData.results[0].country
        };
    } catch (error) {
        logger.error(`❌ Geolocation error: ${error.message} ❌ `);
        throw error;
    }
}
