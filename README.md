# TRAVEL PLANNER APP WITH WEATHER

## Function
The user inputs a destination and date for their travel. If the travel date is within the next 16 days, the app returns weather information. If the destination is in a foreign country, useful information about that country is displayed, as well as an image of its flag. It does so even if weather info is not available.

Data is cleared if a subsequent search does not use the same fields. For example, if a person searches for a foreign destination and later searches for one within the US, the country info is cleared.

## APIs Used
Geonames API is used to get latitude and longitude of the requested location. That information is then used to get weather information from WeatherBit API.

The app then searches Pixabay for a picture of the city. If that doesn't return anything, it retrieves a picture of the country (if foreign) or the state (if in the US).

## Techniques Used
The app utilizes Node, Webpack, and Express.js.

Styles use grid and sass syntax, including sass objects and the ampersand function. Layout is responsive.

## Getting Started
Use `npm run server` and `npm run build-prod`
