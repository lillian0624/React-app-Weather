import React from "react";
import "./App.css";
import Weather from "./Components/Weather";

const API_KEY = "621628665af6bfd2cd7613c424e1a525";
const CITY = "Sydney";

function App() {
  return (
    <div className="App">
      <Weather apiKey={API_KEY} city={CITY}></Weather>
    </div>
  );
}

export default App;
