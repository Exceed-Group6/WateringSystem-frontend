import "./Card.css"
import StatusBar from "./StatusBar"

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
        <StatusBar light={light} humid={humid} temp={temp} />
      </div>
    </div>
  )
}

export default Card
