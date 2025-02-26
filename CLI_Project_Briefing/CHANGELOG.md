# Changelog


## 0.5.2 - 2025-02-25
### PERF: API Optimizations
- Implement concurrent API fetching
- Add request timeout handling
- Cache geocoding results

## 0.5.1 - 2025-02-24
### FIX: Geocoding Errors
- Resolve city lookup failures
- Handle unknown location cases
- Add input validation system

## 0.5.0 - 2025-02-24
### FEAT: Geocoding API
- Replace direct coordinates with city lookup
- Implement country code detection for news
- Add weather code translation system
- Prepare infrastructure for AI integration

## 0.4.1 - 2025-02-24
### CHORE: Preparing for AI Intregration
- Add weather code documentation (utils.js)
- Update API usage examples
- Create emoji reference guide

## 0.4.0 - 2025-02-24
### FEAT: Weather API 
- Implement Open-Meteo API integration
- Add temperature/condition reporting
- Create weather emoji mapping system
- Develop base weather table display

## 0.3.2 - 2025-02-24
### CHORE: News Formatting
- Change from 3 to 10 article titles
- Remove description display
- Fix country code detection

## 0.3.1 - 2025-02-24
### FIX: Module Exports & Country Code
- Fixing ES module exports
- Fix circular dependency issues
- Validate API response shapes
- Fixing API Logs


## 0.3.0 - 2025-02-23
### FEAT: News API
- Add Newsdata.io API integration
- Implement country-specific news filtering
- Develop article truncation system (180 chars)
- Create news formatting

## 0.2.0 - 2025-02-23
### FEAT: Logger Structure
- Loggers now logs errors
- Custom Error message
- Fixed minor typos

## 0.1.2 - 2025-02-23
### CHORE: Logging Infrastructure
- Implement Winston for Quote API
- Create log rotation system
- Add error tracking middleware

## 0.1.1 - 2025-02-23
### FIX: API fetching
- Implement fetch error handling
- Add response validation checks
- Setting up Logger

## 0.1.0 - 2025-02-23
### FEAT: Quote API
- Implement quote API
- Add 250-character quote filtering
- Create quote display formatting
- Develop basic error handling
- Fixing minor typos.