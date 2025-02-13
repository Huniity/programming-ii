const fs = require('fs');  

function countWords(filename) {  
    // let data;
    // try {
    //     rawData = fs.readFileSync('poem.txt', 'utf-8');
    // } catch (error) {
    //     console.error("Error: File doesn't exist.");
    //     return;
    // }

    // const noPonct = data.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
    // const words = noPonct.split(' ');

  const data = fs.readFileSync(filename);  // utf 8
  const words = data.split(' ');
  return words.length;  
}  

console.log(countWords('poem.txt'));  

// https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/String/split
const winston = require("winston")

const logger = winston.createLogger({  
  level: 'debug',  
  transports: [new winston.transports.File({
    filename: "cenas.log"
  })],  
}); 

class ValidationError extends Error{
  constructor(message){
    super(message);
    this.bananas = message;
    logger.info(`Validation '${this.bananas}'`)
  }
}

try {
  const cenas = false;
  if (!cenas){
    logger.Error("Cenas is not valid");
    throw new ValidationError("Bang");
  }
} catch(e){
  if (e instanceof(ValidationError)){
    logger.error("cenas",e);
    console.info("ValidationError")
  }
  else{
    logger.error(e)
    console.error("Common error")
  }
}