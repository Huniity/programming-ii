import { GoogleGenerativeAI } from "@google/generative-ai";
import { getLogger } from './logger.js';

const logger = getLogger('GEN AI', `../winston.logs/genai.logs`);
const API_KEY_GENAI = "AIzaSyCJi23RtwGvNex_sQiDQ1ZxiToQ8Pfi2ZA";

const genAI = new GoogleGenerativeAI(`${API_KEY_GENAI}`);
const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

export async function fetchActivitySuggestion(condition, city) {

  try {
    const prompt =
      `Suggest outdoor activities suitable for the following weather condition: ${condition} and based on the following city: ${city}. Give me only 2 or 3, no description or whatsoever, only the activies name. Try to have at least 1 activity from the city or surroundings. Please dont make a list with * or numbers`;
    const result = await model.generateContent(prompt);

    const responseText = result.response.text();
    return responseText
  } catch (error) {
    logger.error(`OpenAI API error: ${error.message}`);
    throw error;
  }
}

fetchActivitySuggestion();
