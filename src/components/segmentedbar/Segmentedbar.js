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
    opacity: "0.5",
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
          <span class='seg1-label'>Lowest</span>
          <span class='seg2-label'></span>
          <span class='seg3-label'>Mid indicator</span>
          <span class='seg4-label'></span>
          <span class='seg5-label'>Highest</span>
        </div>

        <div id='score' style={myStyle} />
      </div>
    </div>
  );
};

export default Segmentedbar;
