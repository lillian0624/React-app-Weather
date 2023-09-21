import React, { useState, useEffect } from "react";
import axios from "axios";

const Forecast = ({ apiKey, city }) => {
  const [forecastData, setForecastData] = useState(null);

  useEffect(() => {
    const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;

    axios
      .get(apiUrl)
      .then((response) => {
        // console.log(response.data);
        setForecastData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [apiKey, city]);

  // Check if forecastData is still null (data not received yet)
  if (!forecastData) {
    return <div>Loading...</div>;
  }

  if (!forecastData.list || forecastData.list.length === 0) {
    return <div>No forecast data available.</div>;
  }

  // Extract the list of forecasts from the API response for the next 5 days
  const forecastList = forecastData.list;

  return (
    <div>
      <h2>5-Day Weather Forecast for {city}</h2>
      <div className="forecast-container">
        {forecastList.map((forecast, index) => (
          <div key={index} className="forecast-item">
            <p>Date: {forecast.dt_txt}</p>
            <p>Temperature: {forecast.main.temp}°C</p>
            <p>Weather: {forecast.weather[0].description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Forecast;
