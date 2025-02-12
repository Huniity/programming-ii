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