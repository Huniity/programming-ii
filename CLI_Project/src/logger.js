import fs from 'node:fs';
import winston from 'winston';


// Logger setup
export function getLogger(service, filename) {
  return winston.createLogger({
    format: winston.format.combine(
      winston.format.timestamp(),
      winston.format.printf(({ timestamp, message }) => {
        return `${timestamp} [${service}] ${message}`;
      })
    ),
    transports: [
      new winston.transports.Console(),
      new winston.transports.File({filename: '../winston.logs/'+filename})
    ]
  });
}

// Argument parsing
export function parseArgs(args) {
  const city = args[2];
  const outputIndex = args.indexOf('--output');
  
  if (!city || args.includes('--help')) {
    console.log('Usage: weather-news <city> [--output filename.json]');
    process.exit(0);
  }

  return {
    city,
    output: outputIndex > -1 ? args[outputIndex + 1] : null
  };
}

// File saving
export function saveToFile(filename, data) {
  fs.writeFileSync(filename, JSON.stringify(data, null, 2));
}