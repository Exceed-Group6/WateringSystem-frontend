import React from "react";
import Segmentedbar from "../segmentedbar/Segmentedbar";
import Segmentedbarhome from "../segmentedbarhome/Segmentedbarhome";

import "./StatusBar.css";

export const StatusBar = ({ light, humid, temp }) => {
  return (
    <div className='StatusBar'>
      <div className='Light'>
        <img src='./pictures/sun.png' alt=''></img>
        <div className='Segmentedbarhome'>
          <Segmentedbarhome percentage='32' />
        </div>
      </div>
      <div className='Humid'>
        <img src='./pictures/water.png' alt=''></img>
        <div className='Segmentedbarhome'>
          <Segmentedbarhome percentage='62' />
        </div>
      </div>
      <div className='Temp'>
        <img src='./pictures/temp.png' alt=''></img>
        <div className='Segmentedbarhome'>
          <Segmentedbarhome percentage='12' />
        </div>
      </div>
    </div>
  );
};

export default StatusBar;
