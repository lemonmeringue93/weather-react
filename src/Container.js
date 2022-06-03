import React from "react";
import "./Weather.css";
import Small from "./Small";
import WeatherForecast from "./WeatherForecast";
import Column2 from "./Column2";
import Overview from "./Overview";
import Form from "./Form";
import Column1 from "./Column1";

export default function Container() {
  return (
    <div className="container">
      <div className="weather-app">
        <Overview />

        <div className="row">
          <Column1 />

          <Column2 />
          <Form />
        </div>

        <WeatherForecast />
      </div>
      <Small />
    </div>
  );
}
