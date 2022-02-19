import React, { useState } from "react"
import Switch from "../components/Switch"
import "./PreferencePage.css"
import { Link } from "react-router-dom"

function PreferencePage() {
  const [value, setValue] = useState(false)

  return (
    <body>
      <nav className="sticky-top navbar navbar-expand-md navbar-light bg-success">
        <div className="back">
          <Link to={`/Home`}>
            <i class="fa-solid fa-angles-left fa-2x"></i>
          </Link>
        </div>
        <div className="name">
          <h1>Preference Tree</h1>
        </div>
        <div className="picTree">
          <img src="./Setting.png" alt=""></img>
        </div>
        <div className="save">
          <a href="https://www.youtube.com">
            <i class="fa-solid fa-floppy-disk fa-2x"></i>
          </a>
        </div>
      </nav>
      <div className="p-container">
        <div className="cardBack">
          <div className="cardbody">
            <div className="inputBar">
              <div className="idInput">
                {/* <i class="fa-solid fa-id-badge fa-4x"></i> */}
                <img src="./Id.png" alt=""></img>
                <input
                  onKeyPress={(e) => !/[0-9]/.test(e.key) && e.preventDefault()}
                  placeholder="UID"
                  className="Id"
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
                    pattern="[0-9]*"
                  ></input>
                  <input
                    onKeyPress={(e) =>
                      !/[0-9]/.test(e.key) && e.preventDefault()
                    }
                    placeholder="Mid"
                    className="Sunmid"
                  ></input>
                  <input
                    onKeyPress={(e) =>
                      !/[0-9]/.test(e.key) && e.preventDefault()
                    }
                    placeholder="Max"
                    className="Sunmax"
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
                  ></input>
                  <input
                    onKeyPress={(e) =>
                      !/[0-9]/.test(e.key) && e.preventDefault()
                    }
                    placeholder="Mid"
                    className="Watermid"
                  ></input>
                  <input
                    onKeyPress={(e) =>
                      !/[0-9]/.test(e.key) && e.preventDefault()
                    }
                    placeholder="Max"
                    className="Watermax"
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
                  ></input>
                  <input
                    onKeyPress={(e) =>
                      !/[0-9]/.test(e.key) && e.preventDefault()
                    }
                    placeholder="Mid"
                    className="Tempmid"
                  ></input>
                  <input
                    onKeyPress={(e) =>
                      !/[0-9]/.test(e.key) && e.preventDefault()
                    }
                    placeholder="Max"
                    className="Tempmax"
                  ></input>
                </div>
              </div>
              <div className="botToggle">
                <i class="fa-solid fa-robot fa-4x"></i>
                <div className="switch">
                  <Switch
                    className="switch"
                    isOn={value}
                    handleToggle={() => setValue(!value)}
                  />
                </div>
              </div>
            </div>
            <div className="discri">
              <img src="./tree.png" alt=""></img>
              <br></br>
              <textarea placeholder="Name Tree" className="nametree"></textarea>
              <br></br>
              <textarea
                placeholder="Discription..."
                className="discription"
              ></textarea>
            </div>
          </div>
        </div>
      </div>
    </body>
  )
}

export default PreferencePage
