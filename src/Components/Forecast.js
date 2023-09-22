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

  const dailyData = {};
  console.log(dailyData[data]);

  forecastList.forEach((forecast) => {
    const date = forecast.dt_txt.split(" ")[0];

    if (!dailyData[date]) {
      dailyData[date] = {
        maxTemp: -Infinity,
        minTemp: Infinity,
      };
    }

    if (forecast.main.temp_max > dailyData[date].maxTemp) {
      dailyData[date].maxTemp = forecast.main.temp_max;
    }

    if (forecast.main.temp_min > dailyData[date].minTemp) {
      dailyData[date].minTemp = forecast.main.temp_min;
    }

    dailyData[date].weather = forecast.weather[0].description;
  });

  return (
    <div>
      <h2>5-Day Weather Forecast for {city}</h2>
      <div className="forecast-container">
        {Object.keys(dailyData).map((date) => (
          <div key={date} className="forecast-item">
            {" "}
              
            <p>Date: {date}</p>
            <p>Highest Temperature: {dailyData[date].maxTemp}°C</p>
            <p>Lowest Temperature: {dailyData[date].minTemp}°C</p>
            <p>Weather:{dailyData[date].weather}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Forecast;
