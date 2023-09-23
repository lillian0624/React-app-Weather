import React, { useState } from "react";
import "./App.css";
import Weather from "./Components/Weather";
import Forecast from "./Components/Forecast";
import ChangeCity from "./Components/ChangeCity";

const API_KEY = "621628665af6bfd2cd7613c424e1a525";

function App() {
  const [city, setCity] = useState("Canberra");

  const handleCitySubmit = (newCity) => {
    console.log("New city:", newCity);
    setCity(newCity);
  };

  return (
    <div className="App">
      <ChangeCity apiKey={API_KEY} onCitySubmit={handleCitySubmit} />
      <Weather apiKey={API_KEY} city={city} />
      <Forecast apiKey={API_KEY} city={city} />
    </div>
  );
}

export default App;
