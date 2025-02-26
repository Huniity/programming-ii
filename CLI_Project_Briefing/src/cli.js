import { getWeatherActivity } from "./api_weather.js";
import { printNews } from "./api_news.js";
import { randomQuote } from "./api_quote.js";
import { cliMenu } from "./utils.js";
import chalk from "chalk";
import { getLogger } from "./logger.js";
import fs from "node:fs";




/**
 * Validades args
 * Execute if boolean is true
 * @function executeTasks
 * @param {string} city - City name given in args by user
 * @param {boolean} briefing
 * @param {boolean} weather
 * @param {boolean} news
 * @param {boolean} quote
 * @param {boolean} help
 * @param {boolean} save
 */


export function executeTasks() {
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
 
                }
        }
    }
    if (briefing) generateBriefing(city, save);
    if (weather) getWeather(city);
    if (news) getNews(city);
    if (quote) getQuote();
    if (help) getHelp();
}
/**
 * Briefing for city
 * @function generateBriefing
 * @param {string} city - City name given in args by user
 * @param {string} save - Arg given by user
 * If --save is passed, save all the briefing after await Promise.all
 * to Json file. Appending with "a+" Flag
 */

async function generateBriefing(city, save) {
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
    try {
        const [weatherData, newsArticles, quoteData] = await Promise.all([
            getWeatherActivity(city),
            printNews(city),
            randomQuote(),
        ]);
        if (!Promise.resolve) throw new Error(`⚠️ Failed to fetch. ⚠️`);

        if (save) {
            const saveMyBriefing = {
                generatedAt: new Date().toISOString(),
                city,
                weather: weatherData,
                quote: quoteData,
                news: newsArticles,
            };

            fs.writeFileSync(
                "briefing.json",
                JSON.stringify(saveMyBriefing, null, 2),
                { flag: "a+" },
            ); // { flag: 'a+' }
            console.log("\n\n");
            console.log(
                chalk.green(
                    "💾 Briefing saved to briefing.json 💾".padStart(100),
                ),
            );
            console.log("\n\n");
        }
    } catch (error) {

    }
}

/**
 * Get Weather for city
 * @function getWeather
 * @param {string} city - City name given in args by user
 */

function getWeather(city) {
    console.log(
        chalk.red.bold(
            "⛈️  We are reaching the god of thunder to get your weather report...",
        ),
    );
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
 * Get Quote
 * @function getQuote
 */

function getQuote() {
    console.log(
        chalk.green.bold(
            "📜  Ready to get motived? Motivation is key to sucess ...\n",
        ),
    );
    randomQuote();
}

/**
 * Get help commands
 * @function getHelp
 */

function getHelp() {
    console.clear();
    console.log("\n\n\n\n");
    console.log(
        chalk.whiteBright.bold(
            "🚨🆘🚨  Welcome to the HELP department! 🚨🆘🚨".padStart(105),
        ),
    );
    console.log("\n\n\n");
    console.log(
        "🔹 --briefing   📊 Full briefing (weather + news + quote)".padStart(78)
            .padEnd(115) + "▶️  npm start -- London --briefing",
    );
    console.log(
        "🔹 --weather    🌤️  Weather report only".padStart(61).padEnd(117) +
            "▶️  npm start -- London --weather",
    );
    console.log(
        "🔹 --news       🗞️  News updates".padStart(54).padEnd(117) +
            "▶️  npm start -- London --news",
    );
    console.log(
        "🔹 --quote      ✨ Motivational quote".padStart(57).padEnd(114) +
            "▶️  npm start -- London --quote",
    );
    console.log(
        "🔹 --save       💾 Save all data".padStart(53).padEnd(115) +
            "▶️  npm start -- London --briefing --save",
    );
    console.log(
        "🔹 --help       🆘 Get some help".padStart(53).padEnd(115) +
            "▶️  npm start -- --help",
    );
    console.log("\n\n");
}


cliMenu();
executeTasks();
