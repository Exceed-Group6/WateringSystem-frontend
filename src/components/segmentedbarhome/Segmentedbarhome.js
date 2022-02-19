import React from "react";
import "./Segmentedbarhome.css";
const Segmentedbarhome = ({ percentage }) => {
  const myStyle = {
    width: "4px",
    background: "black",
    height: "100%",
    position: "absolute",
    top: "0",
    left: `${percentage}%`,
    opacity: "1",
  };
  return (
    <div id='home-bar-container'>
      <div id='home-bar'>
        <span class='home-seg1'></span>
        <span class='home-seg2'></span>
        <span class='home-seg3'></span>
        <span class='home-seg4'></span>
        <span class='home-seg5'></span>
      </div>

      <div id='home-score' style={myStyle} />
    </div>
  );
};

export default Segmentedbarhome;
