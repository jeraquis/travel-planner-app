

export const updateUI = async () => {

    Client.getData()
    .then(response => {
        console.log(response)
        Client.extractData(response)
    })
    .then(gotLocation => {
        console.log(gotLocation)
        Client.getPix(gotLocation)
    })
}

export const getData = async () => {
    const data = await fetch ('http://localhost:8001/getting')
    console.log(data)
    try {
        const dataJson = await data.json()
        console.log(dataJson)
        return dataJson
    } catch (error) {
        console.log('error', error)
    }
}

export const extractData = async(extData) => {

    document.getElementById('high-temp').innerHTML = `<p>High Temperature: ${extData.highTemp}</p>`
    document.getElementById('low-temp').innerHTML = `<p>Low Temperature: ${extData.lowTemp}</p>`
    document.getElementById('precip').innerHTML = `<p>${extData.precip}</p>`
    document.getElementById('description').innerHTML = `<p>${extData.desc}</p>`
    document.getElementById('location').innerHTML = `<p>${extData.location}</p>`

    return extData.location
}

export const getPix = async(place) => {
    console.log(place)
    let pic
    const formatPlace = place.replace(' ', '+')

    // Pixabay API
    const pixApi = process.env.pix_key
    const pixUrl = 'https://pixabay.com/api/?key='
    
    const pixReq = await fetch(`${pixUrl}${pixApi}&q=${formatPlace}&image_type=photo`)
    try {
        picUrl = await pixReq.json()
        pic = picUrl.hits[0].webformatURL
    } catch (error) {
        console.log('error', error)
    }

    document.getElementById('pic').innerHTML(`<img src="${pic}>`)

// https://pixabay.com/api/?key=16238623-0aadc104a7cd792f4fc412c99&q=yellow+flowers&image_type=photo
}