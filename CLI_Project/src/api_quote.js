import chalk from "chalk";
import { getLogger } from "./logger.js";
import { centerText } from "./utils.js";

const logger = getLogger("QUOTES", "../winston.logs/quote.logs");
const API_KEY_QUOTE = "Zc8twb5lFzlgUK/ixBmIMQ==SH2qLAFUpc8Er7Rd";

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
        "X-Api-Key": API_KEY_QUOTE,
      },
    });
    if (!res.ok) {
      throw new Error(`⚠️ Failed to fetch. HTTP Error code: ${res.status} ⚠️`);
    }
    const data = await res.json();
    const filteredQuotes = data.filter((quoteObj) =>
      quoteObj.quote.length <= 250
    );
    if (filteredQuotes.length > 0) {
      const quoteObject = {
        quote: filteredQuotes[0].quote,
        author: filteredQuotes[0].author,
      };

      return {
        quote: quoteObject.quote,
        author: quoteObject.author,
      };
    } else {
      console.log("❌ No quotes found with 250 or fewer characters. ❌");
    }

    return {
      quote: data.content,
      author: data.author,
    };
  } catch (error) {
    logger.error(`❌ Quote error: ${error.message} ❌`);
  }
}
