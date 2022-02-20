import React from "react";
import Segmentedbar from "../segmentedbar/Segmentedbar";
import Segmentedbarhome from "../segmentedbarhome/Segmentedbarhome";

import "./StatusBar.css";

export const StatusBar = ({ light, humid, temp }) => {
  let aLight =
    ((light.set[1] - light.set[0]) * 100) / (light.set[2] - light.set[0]) - 5;
  let aHumid =
    ((humid.set[1] - humid.set[0]) * 100) / (humid.set[2] - humid.set[0]) - 5;
  let aTemp =
    ((temp.set[1] - temp.set[0]) * 100) / (temp.set[2] - temp.set[0]) - 5;
  let percentLight =
    ((light.current - light.set[0]) * 100) / (light.set[2] - light.set[0]);
  let percentHumid =
    ((humid.current - humid.set[0]) * 100) / (humid.set[2] - humid.set[0]);
  let percentTemp =
    ((temp.current - temp.set[0]) * 100) / (temp.set[2] - temp.set[0]);
  if (percentLight > 100) {
    percentLight = 100;
  } else if (percentLight < 0) {
    percentLight = 0;
  }

  if (percentHumid > 100) {
    percentHumid = 100;
  } else if (percentHumid < 0) {
    percentHumid = 0;
  }

  if (percentTemp > 100) {
    percentTemp = 100;
  } else if (percentTemp < 0) {
    percentTemp = 0;
  }
  return (
    <div className='StatusBar'>
      <div className='Light'>
        <img src='./pictures/sun.png' alt=''></img>
        <div className='Segmentedbarhome'>
          <Segmentedbarhome percentage={percentLight} scale={aLight} />
        </div>
      </div>
      <div className='Humid'>
        <img src='./pictures/water.png' alt=''></img>
        <div className='Segmentedbarhome'>
          <Segmentedbarhome percentage={percentHumid} scale={aHumid} />
        </div>
      </div>
      <div className='Temp'>
        <img src='./pictures/temp.png' alt=''></img>
        <div className='Segmentedbarhome'>
          <Segmentedbarhome percentage={percentTemp} scale={aTemp} />
        </div>
      </div>
    </div>
  );
};

export default StatusBar;
