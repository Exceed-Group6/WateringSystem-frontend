import React from "react";
import "./DetailCard.css";
import { Link } from "react-router-dom";
import Segmentedbar from "../segmentedbar/Segmentedbar";
import { deleteTree, getTreeById } from "../../services/api";

const DetailCard = ({ treeList, treeId }) => {
  let percentLight =
    ((treeList?.base_light?.current - treeList?.base_light?.set[0]) * 100) /
    (treeList?.base_light?.set[2] - treeList?.base_light?.set[0]);

  let percentHumid =
    ((treeList?.base_humidity?.current - treeList?.base_humidity?.set[0]) *
      100) /
    (treeList?.base_humidity?.set[2] - treeList?.base_humidity?.set[0]);
  let percentTemp =
    ((treeList?.base_temp?.current - treeList?.base_temp?.set[0]) * 100) /
    (treeList?.base_temp?.set[2] - treeList.base_temp?.set[0]);

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
    <div>
      <div className='container'>
        <div className='container-left'>
          <img src='./tree.jpeg' alt='tree'></img>
          <div className='description'>
            {/* <h3 color="gray">Description</h3> */}
            <div>{treeList.tree_desc}</div>
          </div>
        </div>
        <div class='d-flex justify-content-around'>
          <div className='container-right'>
            <div className='containter-right-text'>
              <h2>{treeList?.base_light?.current} Lux</h2>
              <h2>{treeList?.base_humidity?.current} %</h2>
              <h2>{treeList?.base_temp?.current}°c</h2>
            </div>

            <div className='container-right-img'>
              <img src='./sun.jpeg' alt='sun'></img>
              <img src='./water.jpeg' alt='water'></img>
              <img src='./temp.jpeg' alt='temp'></img>
            </div>
            <div className='container-right-progress'>
              <div class='w3-container'>
                <Segmentedbar percentage={percentLight} />

                <br></br>
                <Segmentedbar percentage={percentHumid} />
                <br></br>
                <Segmentedbar percentage={percentTemp} />
              </div>
            </div>
          </div>
          <div className='container-right'>
            <div className='container-right-img2'>
              <img src='./hourglass.png' alt='water'></img>
            </div>
            <div className='time-button'>10 Sec</div>
            <button className='watering-button'>
              <img src='./watering-plant.png' alt='watercan'></img>
            </button>
            <div className='container-right-progress'></div>
          </div>
          <div className='container-right'>
            <Link
              to={`/preference/${treeId}`}
              key={treeId}
              className='preference-button'
            >
              Preference configuration
              <img className='pref-img' src='./edit.png' alt='edit'></img>
            </Link>
          </div>
          <div className='container-right'>
            <a href='#' className='a-graph'>
              <p className='graph-button'>
                <img src='./graph.png' alt='graph'></img>
              </p>
            </a>
            <Link to={`/home`}>
              <button type='button' class='btn btn-danger' id='delTree'>
                Delete this tree
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailCard;
