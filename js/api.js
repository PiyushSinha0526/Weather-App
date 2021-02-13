 // ! Add API key here
const API_KEY = `f67c50c0f8c8d9df2bf582b3bfc26484`;

const information = async (CityName) => {
    const data = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${CityName}&appid=${API_KEY}`);
    
    return data;
}

// Todo: get City Details
export const getCityDetails = async (cityName) => {
    
    const response = await information(cityName)
    
    if(response.status !== 200){
        throw new Error();
    }

    const data = await response.json()
    return data;
}