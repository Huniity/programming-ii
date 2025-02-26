import { getLogger } from "./logger.js";
import dotenv from "dotenv";
import chalk from "chalk";
dotenv.config()


const logger = getLogger("QUOTES", "./winston.logs/quote.logs");

const API_KEY = process.env.API_KEY_QUOTE
/**
 * Get Random Quote
 * @async
 * @function randomQuote
 * @returns {Promise<Object>} {quote: string, author: string}
 * @throws {Error} No Fetch
 */

export async function randomQuote() {
  try {
    const res = await fetch(`https://api.api-ninjas.com/v1/quotes`, {
      method: "GET",
      headers: {
        "X-Api-Key": API_KEY,
      },
    });

    
    const data = await res.json();
    const filteredQuotes = data.filter((quoteObj) =>
      quoteObj.quote.length <= 250
    );
    if (filteredQuotes.length > 0) {
      const quoteObject = {
        quote: filteredQuotes[0].quote,
        author: filteredQuotes[0].author,
      };
      console.log((chalk.whiteBright.bold("\n📜 QUOTE OF THE DAY 📜\n")),);
      console.log(`"${quoteObject.quote}"\n- ${quoteObject.author}\n`);


    } 


  } catch (error) {
    console.log(error)
  }
}
