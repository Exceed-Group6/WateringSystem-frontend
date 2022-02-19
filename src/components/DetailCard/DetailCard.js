import React, { useEffect, useState } from "react"
import "./DetailCard.css"
import { Link, useParams } from "react-router-dom"
import { getTreeById } from "../../services/api"

const DetailCard = ({ treeList }) => {
  const { treeId } = useParams()

  const [tree, setTree] = useState([])

  const onGetTreeById = (id) => {
    getTreeById(id).then((res) => {
      setTree(res)
      // console.log(res)
    })
  }

  useEffect(() => {
    onGetTreeById(treeId)
  }, [treeId])

  console.log(tree)
  // console.log(tree.base_light.current)

  return (
    <body>
      <div className="container">
        <div className="container-left">
          <img src="./tree.jpeg" alt="tree"></img>
          <div className="description">
            {/* <h3 color="gray">Description</h3> */}
            <div>{tree.tree_desc}</div>
          </div>
        </div>
        <div class="d-flex justify-content-around">
          <div className="container-right">
            <div className="containter-right-text">
              {/* <h2>{tree.base_light.current} Lux</h2> */}
              {/* <h2>{treeList.base_humidity.current} %</h2> */}
              {/* <h2>{treeList.base_temp.current}°c</h2> */}
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
            <div className="time-button">10 Sec</div>
            <button className="watering-button">
              <img src="./watering-plant.png" alt="watercan"></img>
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
              <button type="button" class="btn btn-danger">
                Delete this tree
              </button>
            </Link>
          </div>
        </div>
      </div>
    </body>
  )
}

export default DetailCard
