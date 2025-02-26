import { GoogleGenerativeAI } from "@google/generative-ai";
import { getLogger } from './logger.js';
import dotenv from "dotenv";
dotenv.config()

const logger = getLogger('GEN AI', `./winston.logs/genai.logs`);
const API_KEY = process.env.API_KEY_GENAI

const genAI = new GoogleGenerativeAI(`${API_KEY}`);
const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

/**
 * Get activity following weathercode and city
 * @async
 * @function fetchActivitySuggestion
 * @param {string} condition - Weather condition from weathercode
 * @param {string} city - City name given in args by user
 * @returns {Promise<string>} Activity Suggestion by GenAI
 * @throws {Error} No fetch
 */

export async function fetchActivitySuggestion(condition, city) {

  try {
    const prompt =
      `Suggest outdoor activities suitable for the following weather condition: ${condition} and based on the following city: ${city}. Give me only 2 or 3, no description or whatsoever, only the activies name. Try to have at least 1 activity from the city or surroundings. Please dont make a list with * or numbers. Just split each one of them with a coma. Like this: <activity>, <activity>, <activity>. `;
    const result = await model.generateContent(prompt);

    const responseText = result.response.text();
    return responseText.slice(0, -1)
  } catch (error) {
    logger.error(`❌  GenAI API error: ${error.message} ❌`);
    throw error;
  }
}
