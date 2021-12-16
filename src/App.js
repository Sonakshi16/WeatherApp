import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchWeather } from "./app/action";

import "./App.css";

function App() {
  const [city, setCity] = useState("");

  const weatherSearch = useSelector((state) => state.weatherinfo);

  const dispatch = useDispatch();
  const getWeatherAction = (city) => dispatch(fetchWeather(city));

  const getWeatherInfo = (e) => {
    e.preventDefault();
    getWeatherAction(city);
  };

  useEffect(() => {
    getWeatherAction("Bengaluru");
  }, [])

  let Info = "";
  if (weatherSearch) {
    Info = (
      <div className="infobox">
        <div className="inbox">
        <h1>{weatherSearch.main.temp}&deg;C</h1>
        <h3 className="fas fa-map-marker-alt">
           {weatherSearch.name}, {weatherSearch.sys.country}
        </h3>
        <div className="otherbox"><p>
          {weatherSearch.main.temp_min}&deg;C/{weatherSearch.main.temp_max}
          &deg;C
        </p>
        <p>{weatherSearch.weather[0].main}</p>
        </div>
        </div>
      </div>
    );
  } else {
    Info = <div>Type any city to start your Search </div>
  }

  return (
    <div className="App">
      <header>
        <h1>Weather App</h1>
        <p>By Sonakshi</p>
      </header>

      <div>
        <form onSubmit={getWeatherInfo} className="Weatherform">
          <div>
            <input
              className="textbox"
              type="text"
              name="name"
              placeholder="Enter your favourite city"
              onChange={(e) => setCity(e.target.value)}
            />
          </div>
          <input type="submit" value="Search" className="button" />
        </form>
      </div>

      {Info}
    </div>
  );
}

export default App;
