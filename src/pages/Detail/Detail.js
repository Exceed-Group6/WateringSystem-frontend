import React from "react";
import DetailCard from "../../components/DetailCard/DetailCard";
import "./Detail.css";
import { Link } from "react-router-dom";
const Detail = () => {
  return (
    <body className='Detail'>
      <nav className='sticky-top navbar navbar-expand-md navbar-light bg-success'>
        <Link to={`/Home`}>
          <i class='fa-solid fa-angles-left fa-2xl'></i>
        </Link>
        <h1 className='title'>Tree 1 </h1>
      </nav>
      <div>
        {" "}
        <DetailCard />
      </div>
    </body>
  );
};

export default Detail;
