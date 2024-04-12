import React, { useState } from "react";
import axios from "axios";

function App() {
  let city = "manila";
  let key = "8cac06f7ab6c10287cd06a316ff84a57";
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`;
  // axios.get(url).then(showTemperature);

  return (
    <div className="app">
      <div className="container">
        <div className="top">
          <div className="left">
            <div className="location">
              <p>Manila</p>
            </div>
            <div className="temp">
              <h1>30°C</h1>
            </div>
          </div>
          <div className="right">
            <div className="icon"></div>
            <p className="details">
              <span className="description">Moderate rain</span>
              <br />
              <span className="humidity">Humidity: 87%, </span>
              <span className="humidity">Wind: 7.2km/h</span>
            </p>
          </div>
        </div>
        <div className="bottom"></div>
      </div>
    </div>
  );
}

export default App;
