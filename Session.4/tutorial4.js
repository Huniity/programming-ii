const fs = require('fs');
    const args = process.argv.slice(2);
    const inputFile = args[0];
    const outputFile = args[1];
    const verbose = args.includes("--verbose");
    

try {
    
    if (!inputFile || !outputFile){
        throw new Error("The command line should include: <script.js> <input.csv> <output.csv> <flag>");
    }

    if (!fs.existsSync(inputFile)) {
        throw new Error(`File "${inputFile}" doesn't exist.`);
    }

    const csvData = fs.readFileSync(inputFile, 'utf-8');
    const rows = csvData.split('\n');
    const headers = rows[0].split(','); // ["name", "email", "age"]
    
    const data = rows.slice(1).map(row => {
        const values = row.split(',');
        return {
            name: values[0],
            email: values[1],
            age: parseInt(values[2])
        };
    })
        
    data.forEach((row, index) => {
        let logs = [];
        
        if (!row.name) logs.push("Missing name");
        if (!row.email) logs.push("Missing email");
        if (isNaN(row.age)) logs.push("Invalid age");
        if (verbose && logs.length > 0) {
            console.log(`Line ${index + 2}: ${logs.join(" | ")} -> ${JSON.stringify(row)}`);
        }
    });

    const validData = data.filter(row => row.name && row.email && !isNaN(row.age));
    fs.writeFileSync(outputFile, JSON.stringify(validData, null, 2));
    console.log(`File "${outputFile}" has been created and written with success.`)
}

catch (error) {
    console.error('Error:', error.message);
}