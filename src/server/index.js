const path = require('path')
const express = require('express')
const dotenv = require('dotenv');
dotenv.config();

const app = express()

app.use(express.static('dist'))

const cors = require('cors')
app.use(cors())

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
//    res.sendFile(path.resolve('src/client/views/index.html'))
})

app.listen(8001, function () {
    console.log('Example app listening on port 8001!')
})

data = {}


// Geonames API request for city coordinates
const geoUser = process.env.geo_user
const geoUrl = 'http://api.geonames.org/searchJSON?q='
const geoForm = '&maxRows=5&username='
const place = (userinput)
const request = geoUrl + place + geoForm + geoUser
const latitude = geoResults[0].lat
const longitude = geoResults[0].lng
const cityname = geoResults[0].name

// http://api.geonames.org/searchJSON?q=paris&maxRows=10&username=jeraquis


// Weatherbit API
const weatherKey = process.env.weatherbit_key
const weatherUrl = 'http://api.weatherbit.io/v2.0/forecast/daily'
const weatherReq = `${weatherUrl}&lat=${latitude}&lon=${longitude}&units=I&key=
    weatherKey`
// need to iterate through dates for the right one before getting weather data
// returns 16 days worth of data
// results.data[0].valid_date => if matches ...
// results.data[0].high_temp
// results.data[0].low_temp
// results.data[0].precip
// results.data[0].weather.description


// Pixabay API
const pixApi = process.env.pix_api
const pixUrl = 'https://pixabay.com/api/?key='
const searchTerm = 'city name from previous api'
const pixReq = `${pixUrl}${pixApi}&q=${searchTerm}&image_type=photo`
const pic = pixResults.hits[0].webformatURL

// https://pixabay.com/api/?key=16238623-0aadc104a7cd792f4fc412c99&q=yellow+flowers&image_type=photo
