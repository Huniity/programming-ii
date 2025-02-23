import { createLogger, format, transports } from "winston"; // package.json -> "type":"module",
// const { createLogger, format, transports } = require("winston"); package.json .> "type:" "common.js"


export function getLogger(level, filename){
    return createLogger({
    level: level,
    format: format.json(),
    transports: [
        new transports.File({filename: filename})
        ]
    });
}