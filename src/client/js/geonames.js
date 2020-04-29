


export const geoApi = async(input) => {
    const geoUser = process.env.geo_user
    const geoUrl = 'http://api.geonames.org/searchJSON?q='
    const geoData = await fetch(`${geoUrl}${input}&maxRows=5&username=${geoUser}`, {

    })

    try {
        const geoOutput = await geoData.json()
        getWeather(geoOutput)
    } catch (error) {
        console.log('error', error)
    }
}



