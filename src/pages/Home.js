import React from "react";
import Card from "../components/card/Card";
import "./Home.css";
import { Link } from "react-router-dom";
export const Home = () => {
  return (
    <div className='Home'>
      <nav className='sticky-top navbar navbar-expand-md navbar-light bg-success'>
        <h1 className='Home-title'>Auto Watering System </h1>
      </nav>
      <div className='Card-list'>
        <Link to={`/detail`}>
          <Card />
        </Link>
      </div>
      <div className='Add-tree'>
        <Link to={`/addTree`}>
          <img src='./pictures/plus.png' alt='Add'></img>
        </Link>
      </div>
    </div>
  );
};

export default Home;
