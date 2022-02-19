import React, { useState, useEffect } from "react"

import Switch from "../components/Switch"
import "./PreferencePage.css"
import { Link, useParams } from "react-router-dom"
import { getTreeById } from "../services/api"
import { flushSync } from "react-dom"

function PreferencePage() {
  const [value, setValue] = useState()
  const [tree, setTree] = useState({})

  const { treeId } = useParams()

  // console.log(tree.cur_bot_status)
  // console.log(value)

  const onGetTreeById = (id) => {
    getTreeById(id).then((res) => {
      setTree(res)

      setValue(res.cur_bot_status)
    })
  }

  useEffect(() => {
    onGetTreeById(treeId)
    console.log(tree.cur_bot_status)
  }, [])

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
    let bot = value
    // setValue(value)
    console.log(bot)

    let reqBody = {
      tree_id: treeId,
      name: nametree,
      desc: dis,
      base_light: [sunmin, sunmid, sunmax],
      base_humidity: [watermin, watermid, watermax],
      base_temp: [tempmin, tempmid, tempmax],
      mode_status: bot,
      duration: dura,
    }
    console.log(reqBody)

    fetch("https://ecourse.cpe.ku.ac.th/exceed06/api/updatecommand", {
      method: "PUT",
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
          <Link to={`/detail/${treeId}`}>
            <i class="fa-solid fa-angles-left fa-2x"></i>
          </Link>
        </div>
        <div className="name">
          <h1>Preference : {tree.tree_name}</h1>
        </div>
        <div className="picTree">
          <img src="./Setting.png" alt=""></img>
        </div>
        <div className="save">
          <Link to={`/home`}>
            <i class="fa-solid fa-floppy-disk fa-2x" onClick={handleSubmit}></i>
          </Link>
        </div>
      </nav>
      <div className="p-container">
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
                  defaultValue={tree.cur_bot_duration}
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
                    pattern="[0-9]*"
                    id="Sunmin"
                    defaultValue={tree?.base_light?.set[0]}
                  ></input>
                  <input
                    onKeyPress={(e) =>
                      !/[0-9]/.test(e.key) && e.preventDefault()
                    }
                    placeholder="Mid"
                    className="Sunmid"
                    defaultValue={tree?.base_light?.set[1]}
                    id="Sunmid"
                  ></input>
                  <input
                    onKeyPress={(e) =>
                      !/[0-9]/.test(e.key) && e.preventDefault()
                    }
                    placeholder="Max"
                    className="Sunmax"
                    defaultValue={tree?.base_light?.set[2]}
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
                    defaultValue={tree?.base_humidity?.set[0]}
                    id="Watermin"
                  ></input>
                  <input
                    onKeyPress={(e) =>
                      !/[0-9]/.test(e.key) && e.preventDefault()
                    }
                    placeholder="Mid"
                    className="Watermid"
                    defaultValue={tree?.base_humidity?.set[1]}
                    id="Watermid"
                  ></input>
                  <input
                    onKeyPress={(e) =>
                      !/[0-9]/.test(e.key) && e.preventDefault()
                    }
                    placeholder="Max"
                    className="Watermax"
                    defaultValue={tree?.base_humidity?.set[2]}
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
                    defaultValue={tree?.base_temp?.set[0]}
                    id="Tempmin"
                  ></input>
                  <input
                    onKeyPress={(e) =>
                      !/[0-9]/.test(e.key) && e.preventDefault()
                    }
                    placeholder="Mid"
                    className="Tempmid"
                    defaultValue={tree?.base_temp?.set[1]}
                    id="Tempmid"
                  ></input>
                  <input
                    onKeyPress={(e) =>
                      !/[0-9]/.test(e.key) && e.preventDefault()
                    }
                    placeholder="Max"
                    className="Tempmax"
                    defaultValue={tree?.base_temp?.set[2]}
                    id="Tempmax"
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
              <textarea
                placeholder="Name Tree"
                className="nametree"
                defaultValue={tree?.tree_name}
                id="nametree"
              ></textarea>
              <br></br>
              <textarea
                placeholder="Discription..."
                className="discription"
                defaultValue={tree?.tree_desc}
                id="discription"
              ></textarea>
            </div>
          </div>
        </div>
      </div>
    </body>
  )
}

export default PreferencePage
