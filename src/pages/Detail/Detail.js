import React from "react";
import DetailCard from "../../components/DetailCard/DetailCard";
import "./Detail.css";
import { Link, useParams } from "react-router-dom";

const Detail = () => {
  // const { treeId } = useParams();
  return (
    <body className='Detail'>
      <nav className='sticky-top navbar navbar-expand-md navbar-light bg-success'>
        <Link to={`/Home`}>
          <i class='fa-solid fa-angles-left fa-2xl'></i>
        </Link>
        <h1 className='title'>Tree </h1>
      </nav>
      <div>
        {" "}
        <DetailCard />
      </div>
    </body>
  );
};

export default Detail;
