export function fetchWeather(city) {
    return function(dispatch){
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=d451876cffb3cfb39020901c3abc78ba`)
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