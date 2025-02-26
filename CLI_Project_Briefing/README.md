

# My Briefing CLI ✨

A command-line tool that provides weather reports, news updates, and motivational quotes based on a specified city. Powered by external APIs and Google Gemini AI for smart activity suggestions.

Why I chosed these features? I think it's always good to have something to provide you some key features to start your day. Your just a click away from knowning anything you need. Want to see the weather in your area? Check it. Want to know some activies depending on the weather and on where you live? Check it. You need some important news, maybe for investments or for personal knowledge? Check it. And why not having a quote. Quotes can be used at anytime in conversation and never let you down. Available anywhere you are at that moment. Thank you for ETIC to give me the oportunity to do this project.

My Briefing CLI is the perfect choice in my opinion for a small project. It's been to connect everything. Integrating more and mroe functionality. Geo Codes, Geo Locations, AI, news ways of coding. Challenging but for sure but necessary to my growth.

## Features 🌟

- **🌦️ Weather Reports**:  
  Get real-time weather data including temperature, conditions, and AI-generated activity suggestions
- **📰 News Updates**:  
  Top 3 trending news articles from your city's country
- **💡 Motivational Quotes**:  
  Daily inspirational quotes to kickstart your day
- **🤖 AI Integration**:  
  Context-aware outdoor activity recommendations based on weather
- **📊 Unified Briefing**:  
  Combine all services into one comprehensive report

## Installation ⚙️

1. **Prerequisites**:
   - Node.js v18+
   - npm v9+
   - API Keys for:
     - [Newsdata.io](https://newsdata.io/)
     - [API-Ninjas](https://api-ninjas.com/)
     - [Google Gemini](https://ai.google.dev/)

2. **Setup**:
   ```bash
   git clone https://github.com/Huniity/my-briefing-cli.git
   cd my-briefing-cli
   npm i

3. **Files Provided**
    - package.json with dependencies
    - CHANGELOG.md
    - README.md
    - Full Project
    - .env file for free API Keys
    - Winston Logs
    - .json saved data.

4. **Usage**
    ```bash
    npm start (Main Menu) 
    npm start -- <city> [OPTIONS] (To access features)
    npm test (Vitest test)

    All [OPTIONS] available are below:

        - --briefing: Full report [weather + news + quote]

        - --weather: Weather report only

        - --news: News updates only

        - --quote: Motivational quote only

        - --save: Save all data to a .json file.

        - --help: See all commands available.

        # Full briefing for Lisbon
            npm start -- Lisbon --briefing

        # Just weather for Paris
            npm start -- Paris --weather

        # News from Berlin
            npm start -- Berlin --news

        # Get a random quote
            npm start -- --quote

        # Get a full report of your briefing in a .json
            npm start -- Rome --briefing --save

        # Get report giving your options
            npm start -- Madrid [OPTION...] --save 

        # Run test with Vitest
            npm test

5. **Project Structure**

```
my-briefing-cli/
├── src/
│   ├── api_news.js       # News API integration
│   ├── api_quote.js      # Quote API integration
│   ├── api_weather.js    # Weather API integration
│   ├── cli.js            # CLI entry point
|   ├── cli.test.js       # CLI test file
│   ├── genAI.js          # Gemini AI integration
│   ├── logger.js         # Winston logging config
│   └── utils.js          # Helpers & constants
├── winston.logs/         # Log directory
├── .env                  # Environment variables such as API KEY
├── data.json             # Saved Data
├── CHANGELOG.md          # Version history
├── README.md             # Project documentation
├── package.json          # NPM dependencies
└── package-lock.json     # Lock file

```
