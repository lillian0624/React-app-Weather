import React, { useState, useEffect } from "react";
import axios from "axios";

const Weather = ({ apiKey, city }) => {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    axios
      .get(apiUrl)
      .then((response) => {
        setWeatherData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [apiKey, city]);

  if (!weatherData) {
    return <div>Loading...</div>;
  }

  const weatherIconUrl = `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`;

  return (
    <div>
      <h2>Current Weather in {city} </h2>

      <p> {(weatherData.main.temp - 273.15).toFixed(2)}°C</p>
      <img src={weatherIconUrl} alt="Weather Icon" />
      <p>Weather: {weatherData.weather[0].description}</p>
    </div>
  );
};

export default Weather;
