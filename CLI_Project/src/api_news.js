import fetch from "node-fetch";
import { getLogger } from "./logger.js";
import { getGeoCode } from "./api_geocode.js";
import chalk from "chalk";

const logger = getLogger("NEWS", `../winston.logs/news.logs`);
const API_KEY_NEWS = "pub_71542c96b63c5f323e4ee1304945d774cd5c9";

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
    const { countryCode } = await getGeoCode(city);
    console.log(chalk.whiteBright.bold(`🌍 Searching the wild internet for this country code: ${countryCode}\n`),);

    const newsRes = await fetch(`https://newsdata.io/api/1/latest?apikey=${API_KEY_NEWS}&country=${countryCode}&language=en`,);
    if (!newsRes.ok) throw new Error(`⚠️  Failed to fetch. HTTP Error code: ${newsRes.status} ⚠️`);

    const rawData = await newsRes.json();
    if (!rawData.results || rawData.results.length === 0) throw new Error ("❌ No news found for this country. ❌");

    return rawData.results.slice(0, 3).map(({ title, description }) => ({
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
      // const jsonObject = { articles };

      articles.forEach(({ title, description }) => {
        console.log(chalk.whiteBright.bold(
          "\n                                          ============================= Etic's Times Journal ============================= "
        ));
        console.log(chalk.blue.bold("📌  News:", title));
        console.log(
          chalk.whiteBright.bold("📝 "),
          description.substring(0, 120) + "...",
        );
      });

      // fs.writeFileSync("news.json", JSON.stringify(jsonObject, null, 2));
      // console.log("Articles have been written to news.json");
    } else {
      logger.error("❌ No articles found. ❌");
    }
  } catch (error) {
    logger.error("⚠️  Error fetching news: ⚠️", error.message);
  }
}