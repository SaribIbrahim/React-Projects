import React from 'react'
import "./Box.css"

function Box({ num, isSelected, onClick }) {
  return (
    <div className={`Box ${isSelected ? "selected" : ""}`} onClick={onClick}>
      <h1>{num}</h1>
    </div>
  );
}

export default Box;
