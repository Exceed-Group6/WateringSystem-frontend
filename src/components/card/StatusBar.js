import React from "react";
import "./StatusBar.css";

export const StatusBar = ({ light, humid, temp }) => {
  return (
    <div className="StatusBar">
      <div className="Light">
        <img src="./pictures/sun.png" alt=""></img>
        <div className="Light-bar"></div>
        {/* <div className="Center-dot"></div> */}
      </div>
      <div className="Humid">
        <img src="./pictures/water.png" alt=""></img>
        <div className="Humid-bar"></div>
        {/* <div className="Center-dot"></div> */}
      </div>
      <div className="Temp">
        <img src="./pictures/temp.png" alt=""></img>
        <div className="Temp-bar"></div>
        {/* <div className="Center-dot"></div> */}
      </div>
    </div>
  );
};

export default StatusBar;
