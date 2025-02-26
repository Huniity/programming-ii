import chalk from "chalk";

/**
 * All Exisiting Weather Codes
 * @param {object} WEATHER_CODES
*/

export const WEATHER_CODES = {
    0: { condition: 'Clear sky'},
    1: { condition: 'Mainly clear'},
    2: { condition: 'Partly cloudy'},
    3: { condition: 'Overcast'},
    45: { condition: 'Fog'},
    48: { condition: 'Depositing rime fog'},
    51: { condition: 'Light drizzle'},
    53: { condition: 'Moderate drizzle'},
    55: { condition: 'Dense drizzle'},
    56: { condition: 'Light freezing drizzle'},
    57: { condition: 'Dense freezing drizzle'},
    61: { condition: 'Light rain'},
    63: { condition: 'Moderate rain'},
    65: { condition: 'Heavy rain'},
    66: { condition: 'Light freezing rain'},
    67: { condition: 'Heavy freezing rain'},
    71: { condition: 'Light snow fall'},
    73: { condition: 'Moderate snow fall'},
    75: { condition: 'Heavy snow fall'},
    77: { condition: 'Snow grains'},
    80: { condition: 'Light rain showers'},
    81: { condition: 'Moderate rain showers'},
    82: { condition: 'Violent rain showers'},
    85: { condition: 'Light snow showers'},
    86: { condition: 'Heavy snow showers'},
    95: { condition: 'Thunderstorm'},
    96: { condition: 'Thunderstorm with slight hail'},
    99: { condition: 'Thunderstorm with heavy hail'},
  };
  
  /**
   * Center my CLI menu
   * @function centerText
   * @param {string} text 
   * @param {number} width 
   * @returns formatation 
   */

  export function centerText(text, width = process.stdout.columns) {
    const padding = Math.max(0, Math.floor((width - text.length) / 2));
    return " ".repeat(padding) + text;
  }

/**
 * Menu for CLI
 * @function cliMenu
 * @param {string} title
 * @param {string} license
 * @param {string} separator
 * Prints formated menu
 */

  export function cliMenu() {
    const title = chalk.green.bold("✨ My Briefing CLI ✨");
    const license = chalk.green.bold("✨ MIT License - A.Dejonc - Etic Algarve ✨");
    const separator = chalk.whiteBright.bold("====================================");
  
    console.log("\n" + centerText(separator));
    console.log(centerText(title));
    console.log(centerText(separator) + "\n");
  
    console.log(("🌍 Get quick updates depending on your city:".padStart(104)));
    console.log(("🌦️  Weather   📰 News   💡 Quotes\n".padStart(101)));
  
    console.log(("🛠   Usage: npm start (to access this menu again)").padStart(70).padEnd(115) +("🛠  Usage: npm start -- <CITY NAME> [ONE OR MORE OPTIONS BELOW]") );

    console.log("🔹 --briefing   📊 Full briefing (weather + news + quote)".padStart(78).padEnd(114) + "▶️  node briefing.js London --briefing");
    console.log("🔹 --weather    🌤️  Weather report only".padStart(61).padEnd(116) + "▶️  node briefing.js Paris --weather");
    console.log("🔹 --news       🗞️  News updates".padStart(54).padEnd(116) + "▶️  node briefing.js Berlin --news");
    console.log("🔹 --quote      ✨ Motivational quote".padStart(57).padEnd(113) + "▶️  node briefing.js Rome --quote");
    console.log("🔹 --save       💾 Save all data".padStart(53).padEnd(114) + "▶️  npm start -- London --briefing --save");
    console.log("🔹 --help       🆘 Get some help".padStart(53).padEnd(114) + "▶️  npm start -- --help");
    console.log("\n" + centerText(separator));
    console.log(centerText(license));
    console.log(centerText(separator) + "\n");
  }

/**
 * Weather condition emojis
 * @param {object} weatherEmojis
 */

  export const weatherEmojis = {
    "Clear": "☀️",
    "Clear sky": "☀️",
    "Partly Cloudy": "⛅",
    "Cloudy": "☁️",
    "Overcast": "☁️",
    "Rain": "🌧️",
    "Thunderstorm": "⛈️",
    "Snow": "❄️",
    "Fog": "🌫️"
  };