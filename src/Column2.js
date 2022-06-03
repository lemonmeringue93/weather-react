import React from "react";

export default function Column2() {
  return (
    <div className="col-6">
      <ul>
        <li>
          Air Quality Index: <span id="aqi"> </span>
        </li>
        <li>
          Humidity: <span id="humid"> </span>%
        </li>
        <li>
          Wind: <span id="wind"> </span>m/s
        </li>
      </ul>
    </div>
  );
}
