import { getWeatherActivity } from "./api_weather.js";
import { printNews } from "./api_news.js";
import { randomQuote } from "./api_quote.js";
import { cliMenu } from "./utils.js";
import chalk from "chalk";
import { getLogger } from "./logger.js";

const logger = getLogger("CLI", `../winston.logs/cli.logs`);

/**
 * Validates if args are passed in command
 *
 * @param {string} city - City name given in args by user
 * @param {boolean} briefing
 * @param {boolean} weather
 * @param {boolean} news
 * @param {boolean} quote
 * @param {boolean} help
 * @param {boolean} save
 */

const args = process.argv.slice(2);

let city;
let briefing = false;
let weather = false;
let news = false;
let quote = false;
let save = false;
let help = false;

for (let i = 0; i < args.length; i++) {
    switch (args[i]) {
        case "--briefing":
            briefing = true;
            break;
        case "--weather":
            weather = true;
            break;
        case "--news":
            news = true;
            break;
        case "--quote":
            quote = true;
            break;
        case "--save":
            save = true;
            break;
        case "--help":
            help = true;
            break;
        default:
            if (!args[i].startsWith("-") && !city) {
                city = args[i];
            } else if (args[i].startsWith("-")) {
                console.log(`❌ Unknown flag: ${args[i]}`);
            }
    }
}

/**
 * Briefing for city
 * @function generateBriefing
 * @param {string} city - City name given in args by user
 */

function generateBriefing(city) {
    console.log(chalk.blue.bold(`Generating briefing for 🌍 City: ${city}\n`));
    console.log(
        chalk.red.bold(
            "⛈️  We are reaching the god of thunder to get your weather report...",
        ),
    );
    console.log(
        chalk.yellow.bold(
            "📭  Hold on, we're not getting your news from wikipedia...",
        ),
    );
    console.log(
        chalk.green.bold(
            "📜  Ready to get motived? Motivation is key to sucess ...\n",
        ),
    );
    getWeatherActivity(city);
    printNews(city);
    randomQuote();
}

/**
 * Get Weather for city
 * @function getWeather
 * @param {string} city - City name given in args by user
 */

async function getWeather(city) {
    console.log(chalk.red.bold("⛈️  We are reaching the god of thunder to get your weather report...",));
    getWeatherActivity(city);
}

/**
 * Get News for city
 * @function getNews
 * @param {string} city - City name given in args by user
 */

function getNews(city) {
    console.log(
        chalk.yellow.bold(
            "📭  Hold on, we're not getting your news from wikipedia...\n",
        ),
    );
    printNews(city);
}

/**
 * Get Quote for city
 * @function getQuote
 * @param {string} city - City name given in args by user
 */

async function getQuote() {
    console.log(chalk.green.bold("📜  Ready to get motived? Motivation is key to sucess ...",));
        const quoteData = await randomQuote();
        console.log((chalk.whiteBright.bold("\n📜 QUOTE OF THE DAY 📜\n")),);
        console.log(`"${quoteData.quote}"\n- ${quoteData.author}\n`);
}

/**
 * Save to Json
 * @function saveToJson
 */

function saveToJson() {
    
}

/**
 * Get help commands
 * @function getHelp
 */

function getHelp() {
    console.clear()
    console.log('\n\n\n\n')
    console.log((chalk.whiteBright.bold("🚨🆘🚨  Welcome to the HELP department! 🚨🆘🚨".padStart(105))));
    console.log('\n\n\n')
    console.log("🔹 --briefing   📊 Full briefing (weather + news + quote)".padStart(78).padEnd(115) + "▶️  npm start -- London --briefing");
    console.log("🔹 --weather    🌤️  Weather report only".padStart(61).padEnd(117) + "▶️  npm start -- London --weather");
    console.log("🔹 --news       🗞️  News updates".padStart(54).padEnd(117) + "▶️  npm start -- London --news");
    console.log("🔹 --quote      ✨ Motivational quote".padStart(57).padEnd(114) + "▶️  npm start -- London --quote");
    console.log("🔹 --save       💾 Save all data".padStart(53).padEnd(115) + "▶️  npm start -- London --briefing --save");
    console.log("🔹 --help       🆘 Get some help".padStart(53).padEnd(115) + "▶️  npm start -- --help");
    console.log('\n\n')
}

/**
 * Execute if boolean is true
 * @function executeTasks
 * @param {string} city - City name given in args by user
 * @param {boolean} briefing
 * @param {boolean} weather
 * @param {boolean} news
 * @param {boolean} quote
 */

function executeTasks() {
    if (briefing) generateBriefing(city);
    if (weather) getWeather(city);
    if (news) getNews(city);
    if (quote) getQuote();
    if (save) saveToJson();
    if (help) getHelp();
}

cliMenu();
executeTasks();
