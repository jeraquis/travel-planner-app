import { geoApi } from "./geonames"


document.getElementById('submit').addEventListener('click', formHandler)

export const formHandler = async () => {

    const location = document.getElementById('location')
    const formatLocation = location.replace(' ', '+')
    
    geoApi(formatLocation)

}

// http://api.geonames.org/searchJSON?q=paris&maxRows=10&username=jeraquis



// Pixabay API
const pixApi = process.env.pix_api
const pixUrl = 'https://pixabay.com/api/?key='
const searchTerm = 'city name from previous api'
const pixReq = `${pixUrl}${pixApi}&q=${searchTerm}&image_type=photo`
const pic = pixResults.hits[0].webformatURL

// https://pixabay.com/api/?key=16238623-0aadc104a7cd792f4fc412c99&q=yellow+flowers&image_type=photo


