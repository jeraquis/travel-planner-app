

export const getWeather = async(geoResults) => {
    const latitude = geoResults[0].lat
    const longitude = geoResults[0].lng
    const cityname = geoResults[0].name
    const weatherKey = process.env.weatherbit_key
    const weatherUrl = 'http://api.weatherbit.io/v2.0/forecast/daily'

    const weatherReq = await fetch(`${weatherUrl}&lat=${latitude}&lon=${longitude}&units=I&key=
        ${weatherKey}`)
    try {
        const weather = await weatherReq.json()
        weatherInfo(weather)
    } catch (error) {
        console.log('error', error)
        document.getElementById('error-msg').innerHTML = `<p>"Error: " + ${error}</p>`
    }

}

export const weatherInfo = async(results) => {

    userDate = document.getElementById('date')
    let weatherData = []


// API returns 16 days worth of data, so we have to iterate through them
// to find the right day

    for (let i=0; i<15; i++) {
        let dataDate = results.data[i].valid_date

        if (dataDate = userDate) {
            weatherData = {
                'highTemp': results.data[i].high_temp,
                'lowTemp': results.data[i].low_temp,
                'precip': results.data[i].precip,
                'desc': results.data[i].weather.description,
            }
        }
    }

    if (weatherData === null) {
        document.getElementById('error-msg').innerHTML = '<p>Please enter a date within the next 16 days in order to see the weather forecast.</p>'
    } else {
        weatherPost(weatherData)
    }
    
}

export const weatherPost = async(results) => {
    await fetch('localhost:8000/posting', {
        method: 'POST',
        headers: {'Content-type': 'application/json'},
        body: JSON.stringify(results)
    })

}
