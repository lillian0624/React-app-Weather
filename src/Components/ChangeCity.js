import React, { useState } from "react";
//import axios from "axios";

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
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter a city"
        value={city || ""}
        onChange={handleCityChange}
      />
      <button type="submit">Get Weather</button>
    </form>
  );
};
export default ChangeCity;
