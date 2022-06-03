import React from "react";

export default function Column1() {
  return (
    <div className="col-6">
      <div className="clearfix weather-temperature">
        <img
          src="https://tse4.mm.bing.net/th?id=OIP.51mwRT4mV6gbTCUBXuGKwwHaEh&pid=Api&P=0&w=298&h=182"
          alt="clear"
          id="icon"
          className="float-left"
        />
        <div className="float-left">
          <strong id="newTemp" type="number">
            19
          </strong>
          <sup>
            <span className="units">
              <a href="true" id="celsius" className="active">
                °C
              </a>{" "}
              |{" "}
              <a href="true" id="fahrenheit">
                °F
              </a>
            </span>
          </sup>

          <div className="row">
            <span className="highlow">
              H:<span id="high"> </span>° |{" "}
              <span className="lowunit">
                L:<span id="low"> </span>°
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
