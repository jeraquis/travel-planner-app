//import { geoApi } from "Client.geonames"

export const formHandler = async () => {

    const rawLocation = document.getElementById('location').value
    const location = rawLocation.replace(' ', '+')
    console.log(location)
    Client.geoApi(location)


}

// http://api.geonames.org/searchJSON?q=paris&maxRows=10&username=jeraquis




