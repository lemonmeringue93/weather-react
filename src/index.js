import React from "react";
import ReactDOM from "react-dom";
import Container from "./Container";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Container />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
