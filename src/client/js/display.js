
export const updateUI = async () => {

    Client.getData()
    .then(response => {
        Client.extractData(response)
    })
    .then(() => {
        Client.getPix()
    })
}

export const getData = async () => {
    const gotten = await fetch ('http://localhost:8001/getting')
    try {
        const dataJson = await gotten.json()
        return dataJson
    } catch (error) {
        console.log('error', error)
    }
}

export const extractData = async(extData) => {


    if (extData.highTemp != undefined) {
        document.getElementById('city').innerHTML = `<p>${extData.city}</p>`
        document.getElementById('high-temp').innerHTML = `<p>High Temperature: ${extData.highTemp}</p>`
        document.getElementById('low-temp').innerHTML = `<p>Low Temperature: ${extData.lowTemp}</p>`
        document.getElementById('precip').innerHTML = `<p>Precipitation: ${extData.precip}in.</p>`
        document.getElementById('description').innerHTML = `<p>Weather description: ${extData.desc}</p>`
    } else {
        Client.weatherClear()
    }
}

export const getPix = async() => {

    const location = document.getElementById('location').value
    const formatPlace = location.replace(' ', '+')

    // Pixabay API
    const pixApi = '16238623-0aadc104a7cd792f4fc412c99'
    const pixUrl = 'https://pixabay.com/api/?key='
    
    const pixReq = await fetch(`${pixUrl}${pixApi}&q=${formatPlace}&image_type=photo`)
    try {
        const picUrl = await pixReq.json()
        if (picUrl.hits[0] === undefined) {
            Client.countryPic()
        } else {
            const pic = picUrl.hits[0].webformatURL
            document.getElementById('pic').innerHTML = `<img src="${pic}" width="300">`
        }
    } catch (error) {
        console.log('error', error)
    }
}

export const countryDisplay = async(countryData) => {
    const country = countryData[0].name
    const currency = countryData[0].currencies[0].name
    const flag = countryData[0].flag
    const population = countryData[0].population
    const language = countryData[0].languages[0].name

    document.getElementById('country-name').innerHTML = `<p>Country: ${country}</p>`
    document.getElementById('state').innerHTML = ''
    document.getElementById('currency').innerHTML = `<p>Currency: ${currency}</p>`
    document.getElementById('population').innerHTML = `<p>Population: ${population}`
    document.getElementById('language').innerHTML = `<p>Language: ${language}`
    document.getElementById('flag').innerHTML = `<img src="${flag}" width="200">`
}

export const countryPic = async() => {
    const input = document.getElementById('location').value
    const geoUrl = 'http://api.geonames.org/searchJSON?q='
    const geoData = await fetch(`${geoUrl}${input}&maxRows=5&username=jeraquis`)

    try {
        const geoOutput = await geoData.json()
        const country = geoOutput.geonames[0].countryName
        if (country != 'United States') {
            console.log('country pic')
            const pixApi = '16238623-0aadc104a7cd792f4fc412c99'
            const pixUrl = 'https://pixabay.com/api/?key='
            
            const pixReq = await fetch(`${pixUrl}${pixApi}&q=${country}&image_type=photo`)
            try {
                const picUrl = await pixReq.json()
                const pic = picUrl.hits[0].webformatURL
                document.getElementById('pic').innerHTML = `<img src="${pic}" width="300">`
        
            } catch (error) {
                console.log('error', error)
            }            
        }
    } catch (error) {
        console.log('error', error)
    }
    
}

export const statePic = async(state) => {
    console.log('state pic')
    const pixApi = '16238623-0aadc104a7cd792f4fc412c99'
    const pixUrl = 'https://pixabay.com/api/?key='
    
    const pixReq = await fetch(`${pixUrl}${pixApi}&q=${state}&image_type=photo`)
    try {
        const picUrl = await pixReq.json()
        const pic = picUrl.hits[0].webformatURL
        document.getElementById('pic').innerHTML = `<img src="${pic}" width="300">`
        document.getElementById('state').innerHTML = `<p>${state}</p>`
    } catch (error) {
        console.log('error', error)
    }

    const countryTest = document.getElementById('language').value
    if (countryTest != undefined) {
        Client.countryClear()
    }
}
