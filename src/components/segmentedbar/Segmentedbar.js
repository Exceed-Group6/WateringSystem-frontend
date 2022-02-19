import React from "react";
import "./Segmentedbar.css";
const Segmentedbar = ({ percentage }) => {
  const myStyle = {
    width: "4px",
    background: "black",
    height: "100%",
    position: "absolute",
    top: "0",
    left: `${percentage}%`,
    opacity: "1",
    margin: "5px 0 0 0",
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
          <span class='seg1'></span>
          <span class='seg2'></span>
          <span class='seg3'></span>
          <span class='seg4'></span>
          <span class='seg5'></span>
        </div>

        <div id='bar-labels'>
          <span class='seg1-label'>Very low</span>
          <span class='seg2-label'>Low</span>
          <span class='seg3-label'>Best</span>
          <span class='seg4-label'>High</span>
          <span class='seg5-label'>Very high</span>
        </div>

        <div id='score' style={myStyle} />
      </div>
    </div>
  );
};

export default Segmentedbar;
