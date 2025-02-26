import fetch from "node-fetch";
import { getLogger } from "./logger.js";
import { getGeoCode } from "./api_geocode.js";
import chalk from "chalk";
import dotenv from "dotenv";
dotenv.config()


const logger = getLogger("NEWS", `./winston.logs/news.logs`);
const API_KEY = process.env.API_KEY_NEWS

/**
 * Fetch randomNews by City
 * @async
 * @function randomNews
 * @param {string} city - City name given in args by user
 * @returns {Promise<Array>} {title: string, description: string}
 * @throws {Error} No Fetch, No News
 */

export async function randomNews(city) {
  try {
    if (!city) throw new Error ("❌ No City given. ❌");

    console.log(chalk.whiteBright.bold(`🌍 Searching the wild internet for this country code: ${countryCode}\n`),);

    const newsRes = await fetch(`https://newsdata.io/api/1/latest?apikey=${API_KEY}&country=${countryCode}&language=en`,);
    if (!newsRes.ok) throw new Error(`⚠️  Failed to fetch. HTTP Error code: ${newsRes.status} ⚠️`);

    const rawData = await newsRes.json();
    if (!rawData.results || rawData.results.length === 0) throw new Error ("❌ No news found for this country. ❌");

    return rawData.results.slice(0, 10).map(({ title, description }) => ({
      title,
      description,
    }));

  } catch (error) {
    logger.error(`❌ News error: ${error.message} ❌`);
    throw error;
  }
}

/**
 * Prints Formated News
 * @async
 * @function printNews
 * @param {string} city - City name given in args by user
 * @param {Promise<Object>} articles - Title and description in Articles
 * @throws {Error} - No Fetch, No News
 */

export async function printNews(city) {
  try {
    const articles = await randomNews(city);
    if (articles.length > 0) {

      


      return {
        title: articles.title,
        description: articles.author,
      };   
      // console.log("Articles have been written to news.json");
    } else {
      logger.error("❌ No articles found. ❌");
    }
  } catch (error) {
    logger.error("⚠️  Error fetching news: ⚠️", error.message);
  }
}