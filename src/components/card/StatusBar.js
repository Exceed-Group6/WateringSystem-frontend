import React from "react";
import Segmentedbar from "../segmentedbar/Segmentedbar";
import Segmentedbarhome from "../segmentedbarhome/Segmentedbarhome";

import "./StatusBar.css";

export const StatusBar = ({ light, humid, temp }) => {
  const percentLight = light.current;
  // ((light.current - light.set[0]) * 100) / (light.set[2] - light.set[0]);
  const percentHumid = humid.current;
  // ((humid.current - humid.set[0]) * 100) / (humid.set[2] - humid.set[0]);
  const percentTemp = temp.current;
  // ((temp.current - temp.set[0]) * 100) / (temp.set[2] - temp.set[0]);
  return (
    <div className='StatusBar'>
      <div className='Light'>
        <img src='./pictures/sun.png' alt=''></img>
        <div className='Segmentedbarhome'>
          <Segmentedbarhome percentage={percentLight} />
        </div>
      </div>
      <div className='Humid'>
        <img src='./pictures/water.png' alt=''></img>
        <div className='Segmentedbarhome'>
          <Segmentedbarhome percentage={percentHumid} />
        </div>
      </div>
      <div className='Temp'>
        <img src='./pictures/temp.png' alt=''></img>
        <div className='Segmentedbarhome'>
          <Segmentedbarhome percentage={percentTemp} />
        </div>
      </div>
    </div>
  );
};

export default StatusBar;
