import APIKEY from './ApiKey.js';

export function fetchWeather(city) {
    return function(dispatch){
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKEY}`)
        .then(res => {
            return res.json();
        })
        .then(response => {
            dispatch({
                type: "FETCH_WEATHER",
                payload: response,
            });
        }).catch(err => {console.log(err);})
    }
}
