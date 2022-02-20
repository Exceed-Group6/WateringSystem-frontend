import React from "react";
import "./Segmentedbarhome.css";
const Segmentedbarhome = ({ percentage, scale }) => {
  const myStyle = {
    width: "4px",
    background: "black",
    height: "100%",
    position: "absolute",
    top: "0",
    left: `${percentage}%`,
    opacity: "1",
  };
  const myStyle1 = {
    _display: "inline-block",
    width: `${scale}%`,
    height: "100%",
    boxSizing: "border-box",
    float: "left",
    backgroundColor: "lightgray",
  };
  const myStyle2 = {
    _display: "inline-block",
    width: `${100 - scale - 10}%`,
    height: "100%",
    boxSizing: "border-box",
    float: "left",
    backgroundColor: "lightgray",
  };
  return (
    <div id='home-bar-container'>
      <div id='home-bar'>
        <span style={myStyle1}></span>
        <span class='home-seg3'></span>
        <span style={myStyle2}></span>
      </div>

      <div id='home-score' style={myStyle} />
    </div>
  );
};

export default Segmentedbarhome;
