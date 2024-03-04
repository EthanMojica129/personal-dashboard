import React, {useState } from "react";

const api = {
    key: process.env.REACT_APP_WEATHER_KEY,
    base: "https://api.openweathermap.org/data/2.5/",
  };

export const Weather =()=> {
    const [search, setSearch] = useState("");
    const [weather, setWeather] = useState({});

    const searchPressed = () => {
        fetch(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`)
          .then((res) => res.json())
          .then((result) => {
            setWeather(result);
          });
      };
  return (
<div className="Weather">
      <header className="weather-header">
        {/* HEADER  */}
        <h1>Todays Weather</h1>

        {/* Search Box - Input + Button  */}
        <div>
          <input
          className="weather-input"
            type="text"
            placeholder="Enter city/town..."
            onChange={(e) => setSearch(e.target.value)}
            onKeyPress={e => {
                if (e.key === "Enter") {
                  searchPressed(search);
                }
              }}
          />
          <button onClick={searchPressed}>Search</button>
        </div>

        {/* If weather is not undefined display results from API */}
        {typeof weather.main !== "undefined" ? (
          <div className="weather-info">
            {/* Location  */}
            <p>{weather.name}</p>

            {/* Temperature Celsius  */}
            <p>{weather.main.temp}°C</p>

            {/* Condition (Sunny ) */}
            <p>{weather.weather[0].main}</p>
            <p>({weather.weather[0].description})</p>
          </div>
        ) : (
          ""
        )}
      </header>
    </div>
  );
}


