import React, { useState } from "react"
import { Link } from "react-router-dom"
import Switch from "../components/Switch"
import "./Addtree.css"

function Addtree() {
  const [botvalue, setbotValue] = useState(false)

  const handleSubmit = () => {
    let nametree = document.getElementById("nametree").value
    let dis = document.getElementById("discription").value
    let dura = document.getElementById("duration").value
    let sunmin = document.getElementById("Sunmin").value
    let sunmid = document.getElementById("Sunmid").value
    let sunmax = document.getElementById("Sunmax").value
    let watermin = document.getElementById("Watermin").value
    let watermid = document.getElementById("Watermid").value
    let watermax = document.getElementById("Watermax").value
    let tempmin = document.getElementById("Tempmin").value
    let tempmid = document.getElementById("Tempmid").value
    let tempmax = document.getElementById("Tempmax").value
    let bot = botvalue
    console.log(bot)

    let reqBody = {
      name: nametree,
      desc: dis,
      base_light: [sunmin, sunmid, sunmax],
      base_humidity: [watermin, watermid, watermax],
      base_temp: [tempmin, tempmid, tempmax],
      mode_status: bot,
      duration: dura,
    }

    fetch("https://ecourse.cpe.ku.ac.th/exceed06/api/postnewtree", {
      method: "POST",
      headers: { "Content-type": "application/json; charset=UTF-8" },
      body: JSON.stringify(reqBody),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err))
  }

  return (
    <body>
      <nav className="sticky-top navbar navbar-expand-md navbar-light bg-success">
        <div className="back">
          <Link to={`/Home`}>
            <i class="fa-solid fa-angles-left fa-2x"></i>
          </Link>
        </div>
        <div className="name">
          <h1>Add Tree</h1>
        </div>
        <div className="picTree">
          <img src="./Addtree.png" alt=""></img>
        </div>
        <div className="save">
          <Link to={`/Home`}>
            <i class="fa-solid fa-floppy-disk fa-2x" onClick={handleSubmit}></i>
          </Link>
        </div>
      </nav>
      <div className="a-container">
        <div className="cardBack">
          <div className="cardbody">
            <div className="inputBar">
              <div className="idInput">
                {/* <i class="fa-solid fa-id-badge fa-4x"></i> */}
                <img src="./hourglass.png" alt=""></img>
                <input
                  onKeyPress={(e) => !/[0-9]/.test(e.key) && e.preventDefault()}
                  placeholder="Duration (sec)"
                  className="duration"
                  id="duration"
                ></input>
              </div>
              <div className="threemid">
                <div className="sunInput">
                  {/* <i class="fa-solid fa-sun fa-4x"></i> */}
                  <img src="./Sun.png" alt=""></img>
                  <input
                    onKeyPress={(e) =>
                      !/[0-9]/.test(e.key) && e.preventDefault()
                    }
                    placeholder="Min"
                    className="Sunmin"
                    id="Sunmin"
                  ></input>
                  <input
                    onKeyPress={(e) =>
                      !/[0-9]/.test(e.key) && e.preventDefault()
                    }
                    placeholder="Mid"
                    className="Sunmid"
                    id="Sunmid"
                  ></input>
                  <input
                    onKeyPress={(e) =>
                      !/[0-9]/.test(e.key) && e.preventDefault()
                    }
                    placeholder="Max"
                    className="Sunmax"
                    id="Sunmax"
                  ></input>
                </div>
                <div className="waterInput">
                  {/* <i class="fa-solid fa-droplet fa-4x"></i> */}
                  <img src="./Water.png" alt=""></img>
                  <input
                    onKeyPress={(e) =>
                      !/[0-9]/.test(e.key) && e.preventDefault()
                    }
                    placeholder="Min"
                    className="Watermin"
                    id="Watermin"
                  ></input>
                  <input
                    onKeyPress={(e) =>
                      !/[0-9]/.test(e.key) && e.preventDefault()
                    }
                    placeholder="Mid"
                    className="Watermid"
                    id="Watermid"
                  ></input>
                  <input
                    onKeyPress={(e) =>
                      !/[0-9]/.test(e.key) && e.preventDefault()
                    }
                    placeholder="Max"
                    className="Watermax"
                    id="Watermax"
                  ></input>
                </div>
                <div className="tempInput">
                  {/* <i class="fa-solid fa-temperature-quarter fa-4x"></i> */}
                  <img src="./Temp.png" alt=""></img>
                  <input
                    onKeyPress={(e) =>
                      !/[0-9]/.test(e.key) && e.preventDefault()
                    }
                    placeholder="Min"
                    className="Tempmin"
                    id="Tempmin"
                  ></input>
                  <input
                    onKeyPress={(e) =>
                      !/[0-9]/.test(e.key) && e.preventDefault()
                    }
                    placeholder="Mid"
                    className="Tempmid"
                    id="Tempmid"
                  ></input>
                  <input
                    onKeyPress={(e) =>
                      !/[0-9]/.test(e.key) && e.preventDefault()
                    }
                    placeholder="Max"
                    className="Tempmax"
                    id="Tempmax"
                  ></input>
                </div>
              </div>
              <div className="botToggle">
                <i class="fa-solid fa-robot fa-4x"></i>
                <div className="switch" id="switch">
                  <Switch
                    className="switch"
                    isOn={botvalue}
                    handleToggle={() => setbotValue(!botvalue)}
                  />
                </div>
              </div>
            </div>
            <div className="discri">
              <img src="./tree.png" alt=""></img>
              <br></br>
              <textarea
                placeholder="Name Tree"
                className="nametree"
                id="nametree"
              ></textarea>
              <br></br>
              <textarea
                placeholder="Discription..."
                className="discription"
                id="discription"
              ></textarea>
            </div>
          </div>
        </div>
      </div>
    </body>
  )
}

export default Addtree
