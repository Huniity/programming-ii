import {getWeatherActivity} from "./api_weather.js"
import {printNews} from "./api_news.js"
import {randomQuote} from "./api_quote.js"

const [command, city, ...args] = process.argv.slice(2);
    
// const args = process.argv.slice(2);
// const [command, numbers] = args;
// const parcel = numbers
//     .split(",")
//     .map((value) => parseInt(value.trim()))
// console.log(sum(parcel))



switch (command.toString().toLowerCase()) {
    case "--briefing" || "-b":
        if(city) console.log("briefing")
        
        break;

    case "--weather":
        console.log(chalk.green.bold("Calculating average..."))
        console.log(chalk.blue.bold(`Your average result is:`));
        break;

    case "quote":
        console.log(chalk.green.bold("Calculating median..."))
        console.log(chalk.blue.bold(`Your median result is:`));
        break;
    case "news":
    
    break;
    default:
        console.error(chalk.redBright.bold("No command with this name."));
}


// const args = process.argv.slice(2); // Remove "node" and "script.js"

// let city;
// let briefing = false;
// let weather = false;
// let news = false;
// let quote = false;

// for (let i = 0; i < args.length; i++) { // args.forEach((arg, index) => {
//   switch (args[i]) {
//     case "--briefing":
//       briefing = true;
//       break;
//     case "--weather":
//       weather = true;
//       break;
//     case "--news":
//       news = true;
//       break;
//     case "--quote":
//       quote = true;
//       break;
//     default:
//       if (!args[i].startsWith("-") && !city) { //  if (!arg.startsWith("-") && !city) {
//         city = args[i]; // First non-flag argument is assumed to be the city
//       } else {
//         console.log(`Unknown argument: ${args[i]}`);
//       }
//   }
// }

// if (briefing && city) {
//   console.log(`Generating briefing for city: ${city}`);
//   if (weather) console.log("Including weather report...");
//   if (news) console.log("Including news updates...");
//   if (quote) console.log("Including a motivational quote...");
// } else {
//   console.log("Error: Use --briefing --weather --news --quote <city>");
// }