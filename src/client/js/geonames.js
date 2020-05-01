
export const geoApi = async(input) => {

    const geoUrl = 'http://api.geonames.org/searchJSON?q='
    const geoData = await fetch(`${geoUrl}${input}&maxRows=5&username=jeraquis`)

    try {
        const geoOutput = await geoData.json()
        Client.getWeather(geoOutput)
        Client.getCountryInfo(geoOutput)
    } catch (error) {
        console.log('error', error)
    }
}

export const getCountryInfo = async(geoInfo) => {
    const country = geoInfo.geonames[0].countryCode

    if (country != 'US') {
        const apiUrl = `https://restcountries.eu/rest/v2/name/${country}?fullText=true`

        const countryApi = await fetch(apiUrl)
        try {
            const countryInfo = await countryApi.json()
            Client.countryDisplay(countryInfo)
        } catch (error) {
            console.log('error', error)
        }
    } else {
        const state = geoInfo.geonames[0].adminName1
        Client.countryClear()
        Client.statePic(state)
        
    }
}

export const countryClear = async () => {
    document.getElementById('country-name').innerHTML = ''
    document.getElementById('currency').innerHTML = ''
    document.getElementById('population').innerHTML = ''
    document.getElementById('language').innerHTML = ''
    document.getElementById('flag').innerHTML = ''
}
