const args = process.argv.slice(2);

const baseLength = 12;
let choiceLength = baseLength;
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "!@#$%^&*()-_=+";
let choice = "";

let includeLowercase = false;
let includeUppercase = false;
let includeNumbers = false;
let includeSymbols = false;

for (let i = 0; i < args.length; i++) {
    switch (args[i].toLowerCase()) {
        case "uppercase":
            includeUppercase = true;
            break;

        case "number":
            includeNumbers = true;
            break;

        case "symbols":
            includeSymbols = true;
            break;

        case "length":
            if (args[i + 1] && !isNaN(args[i + 1])) {
                choiceLength = parseInt(args[i + 1]);
                i++;
            } else {
                console.error("Invalid length provided.");
                process.exit(1);
            }
            break;

        default:
            console.error(`Unknown command: ${args[i]}`);
            process.exit(1);
    }
}

choice += lowercase;
includeLowercase = true;

if (includeUppercase) choice += uppercase;
if (includeNumbers) choice += numbers;
if (includeSymbols) choice += symbols;

function generatePassword() {
    let generatedPw = "";
    for (let i = 0; i < choiceLength; i++) {
        generatedPw += choice.charAt(Math.floor(Math.random() * choice.length));
    }
    return generatedPw;
}

console.log("Generated Password:", generatePassword());