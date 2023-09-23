import React, { useState } from "react";

const ChangeCity = ({ apiKey, onCitySubmit }) => {
  const [city, setCity] = useState("");

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (city.trim() !== "") {
      onCitySubmit(city); // Call the parent component's callback with the city name
      setCity(""); // Clear the input field
    }
  };

  return (
    <div className="change-city-container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="city-input"
          placeholder="Enter a city"
          value={city || ""}
          onChange={handleCityChange}
        />
        <button type="submit" className="submit-button">
          Get Weather
        </button>
      </form>
    </div>
  );
};
export default ChangeCity;
