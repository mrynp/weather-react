import React, { useState } from "react";

export default function Temperature(props) {
  let [temperature, setTemperature] = useState(props.temp);

  function changeToFahrenheit(event) {
    event.preventDefault();
    setTemperature(Math.round((props.temp * 9) / 5 + 32));
  }

  function changeToCelsius(event) {
    event.preventDefault();
    setTemperature(props.temp);
  }

  return (
    <p>
      {temperature}
      <span className="unit">
        <a href="/" onClick={changeToCelsius}>
          °C
        </a>{" "}
        |{" "}
        <a href="/" onClick={changeToFahrenheit}>
          °F
        </a>
      </span>
    </p>
  );
}
