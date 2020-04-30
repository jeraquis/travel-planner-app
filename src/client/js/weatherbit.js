
export const getWeather = async(geoResults) => {
    const latitude = geoResults.geonames[0].lat
    const longitude = geoResults.geonames[0].lng
    const weatherKey = '702e7a61323f48ecb3763210ccaff92b'
    const weatherUrl = 'http://api.weatherbit.io/v2.0/forecast/daily?'

    const weatherReq = await fetch(`${weatherUrl}&lat=${latitude}&lon=${longitude}&units=I&key=${weatherKey}`)
    try {
        const weather = await weatherReq.json()
        Client.weatherInfo(weather)
    } catch (error) {
        console.log('error', error)
        document.getElementById('error-msg').innerHTML = `<p>"Error: " + ${error}</p>`
    }
}

export const weatherInfo = async(results) => {

    const userDate = document.getElementById('date').value
    let weatherData = {}

// API returns 16 days worth of data, so we have to iterate through them
// to find the right day

    for (let i=0; i<15; i++) {

        const dataDate = results.data[i].valid_date

        if (dataDate === userDate) {
            weatherData = {
                'city': results.city_name,
                'highTemp': results.data[i].high_temp,
                'lowTemp': results.data[i].low_temp,
                'precip': results.data[i].precip,
                'desc': results.data[i].weather.description,
            }
        }
    }

    if (weatherData.highTemp === undefined) {
        document.getElementById('error-msg').innerHTML = '<p>Please enter a date within the next 16 days in order to see the weather forecast.</p>'
        document.getElementById('city').innerHTML = `<p>${results.city_name}</p>`
        const weatherTest = document.getElementById('high-temp').value
        console.log(weatherTest)
        if (weatherTest != undefined) {
            Client.weatherClear()
        }
        Client.getPix()
    } else {
        Client.weatherPost(weatherData)
    }
}

export const weatherPost = async(results) => {


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

export const weatherClear = () => {
    document.getElementById('city').innerHTML = ''
    document.getElementById('high-temp').innerHTML = ''
    document.getElementById('low-temp').innerHTML = ''
    document.getElementById('precip').innerHTML = ''
    document.getElementById('description').innerHTML = ''

}
