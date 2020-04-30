import {formHandler} from './js/master'
import {geoApi} from './js/geonames'
import {getCountryInfo} from './js/geonames'
import {getWeather} from './js/weatherbit'
import {weatherInfo} from './js/weatherbit'
import {weatherPost} from './js/weatherbit'
import {weatherClear} from './js/weatherbit'
import {updateUI} from './js/display'
import {getData} from './js/display'
import {extractData} from './js/display'
import {getPix} from './js/display'
import {countryDisplay} from './js/display'
import {countryPic} from './js/display'
import {statePic} from './js/display'

import './styles/base.scss'

document.getElementById('submit').addEventListener('click', formHandler)

export {
    formHandler, geoApi, getWeather, weatherInfo, weatherPost, updateUI,
    getData, extractData, getPix, getCountryInfo, countryDisplay,
    countryPic, statePic, weatherClear
}


