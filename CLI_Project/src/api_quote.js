import { getLogger } from './logger.js';

const logger = getLogger('QUOTES', '../winston.logs/quote.logs');
const API_KEY_QUOTE = "Zc8twb5lFzlgUK/ixBmIMQ==SH2qLAFUpc8Er7Rd";

export async function randomQuote() {
  try {
    const res = await fetch(`https://api.api-ninjas.com/v1/quotes`, {
        method: 'GET',
        headers: {
            'X-Api-Key': API_KEY_QUOTE
        }
    });
    if (!res.ok) throw new Error(`Failed to fetch. HTTP Error code: ${res.status}`);
    const data = await res.json();
    
    const quoteObject = {
        quote: data[0].quote,
        author: data[0].author,
    };
    console.log(`"${quoteObject.quote}" - ${quoteObject.author}.`);
      

    return {
      quote: data.content,
      author: data.author
    };
    
    
    
  } catch (error) {
    logger.error(`Quote error: ${error.message}`);
  }
  
}

randomQuote();
