import React from "react";

export default function Overview() {
  return (
    <div className="overview">
      <h1 id="cityhead">Leeds </h1>
      <span role="img" aria-label="accessibleemoji" id="location">
        📍
      </span>
      <ul>
        <li id="date"> Day / Time</li>
        <li id="description">Cloudy</li>
      </ul>
    </div>
  );
}
