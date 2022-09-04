 // ! Add API key here
const API_KEY = `dd4cd0a5345222cbde38d1f8bc8c22d5`;

const location = async (CityName) => {
    const data = await fetch(`//api.openweathermap.org/geo/1.0/direct?q=${CityName}&limit=5&appid=${API_KEY}`);
    
    return data;
}

const information = async (lat, lon) => {
    const data = await fetch(`//api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`)
    
    return data;
}

export const getCityDetails = async (cityName) => {
    // request latitude and longitude
    const locationData = await location(cityName)
    if(locationData.status !== 200){
        throw new Error();
    }
    const jsonLocationData = await locationData.json()
    const {lon, lat} = jsonLocationData[0]
    
    // request actual data using latitude and longitude
    const res = await information(lat, lon)
    if(res.status !== 200){
        throw new Error();
    }
    const data = await res.json()


    return data;
}
