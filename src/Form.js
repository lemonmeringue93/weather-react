import React, { useState } from "react";
import axios from "axios";

export default function Form() {
  const [city, setCity] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [weather, setWeather] = useState("");

  function displayWeather(response) {
    setLoaded(true);
setWeather({
  temperature: response.data.main.temp,
  wind: response.data.wind.speed,
  humidity: response.data.main.humidity
});
}

  function handleSubmit(event) {
    event.preventDefault();
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=798023fb3d35165272c1fae40ceef0ea&units=metric`;
    axios.get(url).then(displayWeather);
  }
function updateCity(event) {
  setCity(event.target.value);
}

let form = (
  <form onSubmit={handleSubmit}>
    <input type="search" placeholder="Enter a city" onChange={updateCity} />
    <button type="submit">Search</button>
  </form>
);

if (loaded) {
  return (
    <div>
      {form}
      <ul>
        <li>Temperature: {weather.temperature}°C</li>
        <li>Wind: {weather.wind} m/s</li>
        <li>Humidity: {weather.humidity} %</li>
      </ul>
    </div>
  );
} else {
  return form;
}
}

