import React from "react";

export default function Form() {
  function handleSubmit(event) {
    event.preventDefault();
    alert("20 °C.");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="search" />
      <input type="submit" value="Search" />
    </form>
  );
}
