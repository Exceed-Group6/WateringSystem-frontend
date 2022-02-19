import React, { useEffect, useState } from "react"
import "./DetailCard.css"
import { Link, useParams } from "react-router-dom"
import { deleteTree, getTreeById, manualWater } from "../../services/api"

const DetailCard = ({ treeList }) => {
  const Tree = useParams()
  // console.log(Tree.treeId)
  // console.log(manualWater(Tree.treeId))

  return (
    <div>
      <div className="container">
        <div className="container-left">
          <img src="./tree.jpeg" alt="tree"></img>
          <div className="description">
            {/* <h3 color="gray">Description</h3> */}
            <div>{treeList.tree_desc}</div>
          </div>
        </div>
        <div class="d-flex justify-content-around">
          <div className="container-right">
            <div className="containter-right-text">
              <h2>{treeList?.base_light?.current} Lux</h2>
              <h2>{treeList?.base_humidity?.current} %</h2>
              <h2>{treeList?.base_temp?.current}°c</h2>
            </div>

            <div className="container-right-img">
              <img src="./sun.jpeg" alt="sun"></img>
              <img src="./water.jpeg" alt="water"></img>
              <img src="./temp.jpeg" alt="temp"></img>
            </div>
            <div className="container-right-progress">
              <div class="w3-container">
                <div class="w3-light-grey">
                  <div class="w3-green"></div>
                </div>
                <br></br>

                <div class="w3-light-grey">
                  <div class="w3-blue"></div>
                </div>
                <br></br>

                <div class="w3-light-grey">
                  <div class="w3-red"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="container-right">
            <div className="container-right-img2">
              <img src="./hourglass.png" alt="water"></img>
            </div>
            <div className="time-button">{treeList.duration || 0} Sec</div>
            <button className="watering-button">
              <img
                src="./watering-plant.png"
                alt="watercan"
                onClick={() => manualWater(Tree.treeId)}
              ></img>
            </button>
            <div className="container-right-progress"></div>
          </div>
          <div className="container-right">
            <Link to={`/preference`} className="preference-button">
              Preference configuration
              <img className="pref-img" src="./edit.png" alt="edit"></img>
            </Link>
          </div>
          <div className="container-right">
            <a href="#" className="a-graph">
              <p className="graph-button">
                <img src="./graph.png" alt="graph"></img>
              </p>
            </a>
            <Link to={`/home`}>
              <button
                type="submit"
                class="btn btn-danger"
                onClick={() => deleteTree(Tree.treeId)}
              >
                Delete this tree
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DetailCard
