import winston from 'winston';

/**
 * Winston Logger
 * @function getLogger
 * @param {string} service
 * @param {string} filename
 * @param {string} timestamp
 * @param {string} message
 * @returns {winston.Logger} Configured logger instance
 */

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