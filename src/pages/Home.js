import React, { useState, useEffect } from "react"
import Card from "../components/card/Card"
import "./Home.css"
import { Link } from "react-router-dom"
import { getAllTree } from "../services/api"
export const Home = () => {
  const [treeList, setTreeList] = useState([])
  useEffect(() => {
    const count = setInterval(() => {
      getAllTree().then((data) => {
        setTreeList(data.result)
      })
      return () => {
        clearInterval(count)
      }
    }, 1000)
  }, [])

  return (
    <div className="Home">
      <nav className="sticky-top navbar navbar-expand-md navbar-light bg-success">
        <h1 className="Home-title">Auto Watering System </h1>
        <div className="leaf">
          <img src="./leaf.png" alt=""></img>
        </div>
      </nav>
      <div className="Card-list">
        {treeList.map((tree) => (
          <Link to={`/detail/${tree.id}`} key={tree.id}>
            <Card
              id={tree.id}
              name={tree.name}
              light={tree.base_light}
              humid={tree.base_humidity}
              temp={tree.base_temp}
            />
          </Link>
        ))}
      </div>
      <div className="Add-tree">
        <Link to={`/addTree`}>
          <img src="./pictures/plus.png" alt="Add"></img>
        </Link>
      </div>
    </div>
  )
}

export default Home
