import { createReadStream } from "node:fs"
import readline from "node:readline"
import fs from 'node:fs'

export class Transform {
    #filePath;
    constructor(filePath){
        this.#filePath = filePath;
    }

    start(){
        const stream = createReadStream(this.#filePath, "utf-8");
        stream.on("data", chunk => console.log(`Chunk: ${chunk.length}`));
    }

    countingLines() {
        let rowCount = 0;
        let chunk = [];
        let countingChunks = 0;
        
        const stream = fs.createReadStream(this.#filePath, { encoding: 'utf8' });
        const rl = readline.createInterface({
            input: stream,
            output: process.stdout,
            terminal: false
        });

        rl.on('line', (line) => {
            rowCount++;
            chunk.push(line);

            if (chunk.length === 10){
                this.processChunk(chunk);
                chunk = [];
                countingChunks++
            }
        });

        rl.on('close', () => {
            if (chunk.length > 0){
                this.processChunk(chunk);
            }
            console.log(`The CSV file has ${rowCount} rows.`);
            console.log(`The CSV file has ${countingChunks} chunks.`);
            fs.writeFileSync('report.json', JSON.stringify({stream, rl, countingChunks, rowCount}, null, 2));
        });

        rl.on('error', (err) => {
            console.error('Error processing the file:', err);
        });
    }

    processChunk(chunk){
        console.log("Processing Chunk");
        console.log(chunk.join("\n"));
        console.log("======")
    }

}




