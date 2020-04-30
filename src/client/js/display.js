
export const updateUI = async () => {

    Client.getData()
    .then(response => {
        console.log(response)
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
        console.log(dataJson)
        return dataJson
    } catch (error) {
        console.log('error', error)
    }
}

export const extractData = async(extData) => {

//    const location = document.getElementById('location').value
    console.log(extData.city)

    document.getElementById('city').innerHTML = `<p>${extData.city}</p>`
    document.getElementById('high-temp').innerHTML = `<p>High Temperature: ${extData.highTemp}</p>`
    document.getElementById('low-temp').innerHTML = `<p>Low Temperature: ${extData.lowTemp}</p>`
    document.getElementById('precip').innerHTML = `<p>Precipitation: ${extData.precip}in.</p>`
    document.getElementById('description').innerHTML = `<p>Weather description: ${extData.desc}</p>`

//    return extData.location
}

export const getPix = async() => {

    const location = document.getElementById('location').value
    const formatPlace = location.replace(' ', '+')

    // Pixabay API
    const pixApi = process.env.pix_key
    const pixUrl = 'https://pixabay.com/api/?key='
    
    const pixReq = await fetch(`${pixUrl}${pixApi}&q=${formatPlace}&image_type=photo`)
    try {
        picUrl = await pixReq.json()
        pic = picUrl.hits[0].webformatURL
        console.log(pic)
        document.getElementById('pic').innerHTML(`<img src="${pic}>`)
    } catch (error) {
        console.log('error', error)
    }


// https://pixabay.com/api/?key=16238623-0aadc104a7cd792f4fc412c99&q=yellow+flowers&image_type=photo
}