import fetch from 'node-fetch';
import { getLogger } from './logger.js';


const logger = getLogger('NEWS', `../winston.logs/news.logs`);
const API_KEY_NEWS = "pub_71542c96b63c5f323e4ee1304945d774cd5c9";

async function randomNews() {
  try {
    const country = "pt";
    const language = "en";
    const res = await fetch(`https://newsdata.io/api/1/latest?apikey=${API_KEY_NEWS}&country=${country}&language=${language}`);
    if (!res.ok) throw new Error(`Failed to fetch. HTTP Error code: ${res.status}`);
    const data = await res.json();
    
     return data.results.slice(0, 3).map(({ title, description }) => ({
       title,
       description
     }));

    
  } catch (error) {
    logger.error(`News error: ${error.message}`);
    throw error;
  }
}



export async function printNews() {
  try {
    const articles = await randomNews();
    if (articles && articles.length > 0) {
      articles.forEach(({ title, description }) => {
        console.log("Title:", title);
        console.log("Description:", description);
        console.log('------------------------');
      });
    } else {
      console.log("No articles found.");
    }
  } catch (error) {
    console.error("Error fetching news:", error);
  }
}
