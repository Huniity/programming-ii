

const [command, ...args] = process.argv.slice(2);

const baseLength = 12;
let choiceLength = baseLength;
const lowercase = 'abcdefghijklmnopqrstuvwxyz';
let choice = lowercase;
const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const number = '0123456789';
const symbols = '!@#$%^&*()-_=+';
let generatedPw = '';

switch (command.toString().toLowerCase()) {
    case "uppercase":
        choice += uppercase;
        break;

    case "number":
        choice += number;
        break;

    case "symbols":
        choice += symbols;
        break;

    case "length":
        if (args[0] && !isNaN(args[0])) {
            choiceLength = parseInt(args[0]);
        } else {
            console.error(("Invalid length provided."));
            process.exit(1);
        }
        break;

    default:
        console.error(("No command with this name."));
        process.exit(1);
}

function generatePassword() {
    let retVal = '';
    for (let i = 0; i < choiceLength; i++) {
        retVal += choice.charAt(Math.floor(Math.random() * choice.length));
    }
    return retVal;
}

const passwordText = generatePassword();
console.log(("Generated Password: "), passwordText);