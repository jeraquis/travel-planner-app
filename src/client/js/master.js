//import { geoApi } from "Client.geonames"

export const formHandler = async () => {

    const location = document.getElementById('location')
    const formatLocation = location.replace(' ', '+')
    
    Client.geoApi(formatLocation)
    .then( () => {
        Client.updateUI()
    })

}

// http://api.geonames.org/searchJSON?q=paris&maxRows=10&username=jeraquis




