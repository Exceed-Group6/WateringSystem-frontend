import "./Card.css";
import Status from "./StatusBar";

const Card = ({ id, name, light, humid, temp }) => {
  return (
    <div className="Card">
      <div className="Card-body">
        <div className="Card-header">
          <h3>Tree {id}</h3>
        </div>
        <div className="Tree">
          <img src="./pictures/tree.png" alt="tree"></img>
        </div>
        <div className="Status">
          <img src="./pictures/sun.png" alt=""></img>
          <img src="./pictures/water.png" alt=""></img>
          <img src="./pictures/temp.png" alt=""></img>
        </div>
      </div>
    </div>
  );
};

export default Card;
