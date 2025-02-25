const winston = require("winston");
const fs = require("node:fs");

const logger = winston.createLogger({
  level: "info",
  format: winston.format.json(),
  transports: new winston.transports.File({
    filename: "tracking.log",
  }),
});

class ValidationError extends Error{
  constructor(message){
    super(message);
    this.name = message;
    logger.info(`Validation '${this.name}'`)
  }
}
// Function to track execution time with high precision
function trackExecTime(func) {
  return function (...args) {
    const start = process.hrtime(); // Start time in [seconds, nanoseconds]
    const result = func(...args);
    const diff = process.hrtime(start); // Difference in [seconds, nanoseconds]

    // Convert the difference to milliseconds with decimal precision
    const executionTimeMs = (diff[0] * 1000) + (diff[1] / 1e6); // 1e6 = 1,000,000 (nanoseconds to milliseconds)
    const preciseExecutionTime = executionTimeMs.toFixed(3); // Round to 2 decimal places

    // Log the execution time
    logger.info(`Function ${func.name} executed in ${preciseExecutionTime}ms`);

    return result; // Return the result of the function
  };
}

try {
   function countWords() {
    try {
      if (!fs.existsSync("poem.txt")) {
        throw new ValidationError ("File does not exist.");
      }
    } catch (error) {
      logger.error(`Error in countWords: ${error.message}`);
    }
    try {
      const rawData = fs.readFileSync("poem.txt", "utf-8");
      if (rawData == "") {
        throw new ValidationError ("File is empty.");
      }
    } catch (error) {
      logger.error(`Error in countWords: ${error.message}`);
    }

    const data = fs.readFileSync("poem.txt").toString("utf-8").replace(
      /[.,\/#!$%\^&\*;:{}=\-_`~()]/g,
      "",
    );
    console.log(data);

    const words = data.split(" ");
    console.log(words);

    return words.length;
  }
} catch (error) {
  logger.error(`Error in countWords: ${error.message}`);
  return null;
}

export const trackCountWords = trackExecTime(countWords);
console.log(`Total of words: ${trackCountWords()}.`);


