

export const getWeather = async(geoResults) => {
    console.log(geoResults)
    const latitude = geoResults.geonames[0].lat
    const longitude = geoResults.geonames[0].lng
//    const cityname = geoResults.geonames[0].name
//    const weatherKey = process.env.weatherbit_key
    const weatherKey = '702e7a61323f48ecb3763210ccaff92b'
    const weatherUrl = 'http://api.weatherbit.io/v2.0/forecast/daily?'

    const weatherReq = await fetch(`${weatherUrl}&lat=${latitude}&lon=${longitude}&units=I&key=${weatherKey}`)
    console.log(weatherReq)
    try {
        const weather = await weatherReq.json()
        console.log(weather)
        Client.weatherInfo(weather)
    } catch (error) {
        console.log('error', error)
        document.getElementById('error-msg').innerHTML = `<p>"Error: " + ${error}</p>`
    }

}

export const weatherInfo = async(results) => {
    console.log(results)

    const userDate = document.getElementById('date').value
//    const location = document.getElementById('location').value

//    const location = document.getElementById('location').value
    let weatherData = {}


// API returns 16 days worth of data, so we have to iterate through them
// to find the right day

    for (let i=0; i<15; i++) {
        const city = results.city_name
        console.log(city)
        const dataDate = results.data[i].valid_date

        if (dataDate === userDate) {
            console.log(results.data[i])
            console.log(results.data[i].valid_date)
            weatherData = {
                'city': results.city_name,
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
        Client.weatherPost(weatherData)
    }
    
}

export const weatherPost = async(results) => {
    console.log(results)
    await fetch('http://localhost:8001/posting', {
        method:'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(results)
    })
    .then( () => {
        Client.updateUI()
    })
}
