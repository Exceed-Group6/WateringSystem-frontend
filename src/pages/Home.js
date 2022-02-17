import React from "react";
import Card from "../components/card/Card";
import "./Home.css";

export const Home = () => {
  return (
    <div className="Home">
      <nav className="sticky-top navbar navbar-expand-md navbar-light bg-success">
        <h1 className="title">Auto Watering System </h1>
      </nav>
      <div className="Card-list">
        <Card />
      </div>
      <div className="Add-tree">
        <img src="./pictures/plus.png" alt="Add"></img>
      </div>
    </div>
  );
};

export default Home;
