import React from "react";
import "./App.css";
import Weather from "./Components/Weather";
import Forecast from "./Components/Forecast";

const API_KEY = "621628665af6bfd2cd7613c424e1a525";
const CITY = "Canberra";

function App() {
  return (
    <div className="App">
      <Weather apiKey={API_KEY} city={CITY} />
      <Forecast apiKey={API_KEY} city={CITY} />
    </div>
  );
}

export default App;
