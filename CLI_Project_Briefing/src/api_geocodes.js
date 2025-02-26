import { getLogger } from "./logger.js";
const logger = getLogger("GEOCODE", `./winston.logs/geo.logs`);

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

            const geoData = await geoRes.json();


        return geoData.results[0];
    } catch (error) {

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
