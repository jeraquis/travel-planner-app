
export const geoApi = async(input) => {

    const geoUrl = 'http://api.geonames.org/searchJSON?q='
    const geoData = await fetch(`${geoUrl}${input}&maxRows=5&username=jeraquis`)

    try {
        const geoOutput = await geoData.json()
        Client.getWeather(geoOutput)
    } catch (error) {
        console.log('error', error)
    }
}
