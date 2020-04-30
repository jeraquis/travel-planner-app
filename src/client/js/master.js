
export const formHandler = async () => {

    const rawLocation = document.getElementById('location').value
    const location = rawLocation.replace(' ', '+')
    Client.geoApi(location)

}
