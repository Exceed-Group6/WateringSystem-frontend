import React from "react";
import "./Segmentedbar.css";
const Segmentedbar = ({ percentage, scale }) => {
  const myStyle = {
    width: "4px",
    background: "black",
    height: "100%",
    position: "absolute",
    top: "0",
    left: `${percentage}%`,
    opacity: "0.5",
  };
  const myStyle1 = {
    _display: "inline-block",
    width: `${scale}%`,
    height: "100%",
    boxSizing: "border-box",
    float: "left",
    backgroundColor: "gray",
  };
  const myStyle2 = {
    _display: "inline-block",
    width: `${100 - scale - 10}%`,
    height: "100%",
    boxSizing: "border-box",
    float: "left",
    backgroundColor: "gray",
  };
  return (
    <div>
      <div>
        <span class='det2'></span>
        <span class='det4'></span>
        <span class='det4'></span>
        <span class='det5'></span>
      </div>

      <div id='bar-container'>
        <div id='bar'>
          <span style={myStyle1}></span>
          <span class='seg3'></span>
          <span style={myStyle2}></span>
        </div>

        <div id='bar-labels'>
          <span class='seg2-label'></span>
          <span class='seg3-label'></span>
          <span class='seg4-label'></span>
        </div>

        <div id='score' style={myStyle} />
      </div>
    </div>
  );
};

export default Segmentedbar;
