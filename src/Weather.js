import React from "react";
import axios from "axios";
import { Hearts } from "react-loader-spinner";

export default function Weather(props) {
  function showTemperature(response) {
    alert(`The weather in ${props.city} is ${response.data.main.temp}°C`);
  }
  let key = "8cac06f7ab6c10287cd06a316ff84a57";
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${key}&units=metric`;
  axios.get(url).then(showTemperature);

  return (
    <Hearts
      height="80"
      width="80"
      color="#4fa94d"
      ariaLabel="hearts-loading"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
    />
  );
}
