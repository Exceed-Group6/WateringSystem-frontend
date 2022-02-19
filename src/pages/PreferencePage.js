import React, { useState, useEffect } from "react";

import Switch from "../components/Switch";
import "./PreferencePage.css";
import { Link, useParams } from "react-router-dom";
import { getTreeById } from "../services/api";

function PreferencePage() {
  const [value, setValue] = useState(false);
  const { treeId } = useParams();

  const [tree, setTree] = useState({});

  const onGetTreeById = (id) => {
    getTreeById(id).then((res) => {
      setTree(res);
    });
  };

  useEffect(() => {
    onGetTreeById(treeId);
    setValue(!tree.cur_bot_status);
  }, []);

  return (
    <body>
      <nav className='sticky-top navbar navbar-expand-md navbar-light bg-success'>
        <div className='back'>
          <Link to={`/detail/${treeId}`}>
            <i class='fa-solid fa-angles-left fa-2x'></i>
          </Link>
        </div>
        <div className='name'>
          <h1>Preference : {tree.tree_name}</h1>
        </div>
        <div className='picTree'>
          <img src='./Setting.png' alt=''></img>
        </div>
        <div className='save'>
          <a href='https://www.youtube.com'>
            <i class='fa-solid fa-floppy-disk fa-2x'></i>
          </a>
        </div>
      </nav>
      <div className='p-container'>
        <div className='cardBack'>
          <div className='cardbody'>
            <div className='inputBar'>
              <div className='idInput'>
                {/* <i class="fa-solid fa-id-badge fa-4x"></i> */}
                <img src='./Id.png' alt=''></img>
                <input
                  onKeyPress={(e) => !/[0-9]/.test(e.key) && e.preventDefault()}
                  placeholder='UID'
                  className='Id'
                  value={treeId}
                  onChange={(e) => this.onTodoChange(e.target.value)}
                ></input>
              </div>
              <div className='threemid'>
                <div className='sunInput'>
                  {/* <i class="fa-solid fa-sun fa-4x"></i> */}
                  <img src='./Sun.png' alt=''></img>
                  <input
                    onKeyPress={(e) =>
                      !/[0-9]/.test(e.key) && e.preventDefault()
                    }
                    placeholder='Min'
                    className='Sunmin'
                    pattern='[0-9]*'
                    defaultValue={tree?.base_light?.set[0]}
                  ></input>
                  <input
                    onKeyPress={(e) =>
                      !/[0-9]/.test(e.key) && e.preventDefault()
                    }
                    placeholder='Mid'
                    className='Sunmid'
                    value={tree?.base_light?.set[1]}
                  ></input>
                  <input
                    onKeyPress={(e) =>
                      !/[0-9]/.test(e.key) && e.preventDefault()
                    }
                    placeholder='Max'
                    className='Sunmax'
                    defaultValue={tree?.base_light?.set[2]}
                  ></input>
                </div>
                <div className='waterInput'>
                  {/* <i class="fa-solid fa-droplet fa-4x"></i> */}
                  <img src='./Water.png' alt=''></img>
                  <input
                    onKeyPress={(e) =>
                      !/[0-9]/.test(e.key) && e.preventDefault()
                    }
                    placeholder='Min'
                    className='Watermin'
                    defaultValue={tree?.base_humidity?.set[0]}
                  ></input>
                  <input
                    onKeyPress={(e) =>
                      !/[0-9]/.test(e.key) && e.preventDefault()
                    }
                    placeholder='Mid'
                    className='Watermid'
                    defaultValue={tree?.base_humidity?.set[1]}
                  ></input>
                  <input
                    onKeyPress={(e) =>
                      !/[0-9]/.test(e.key) && e.preventDefault()
                    }
                    placeholder='Max'
                    className='Watermax'
                    defaultValue={tree?.base_humidity?.set[2]}
                  ></input>
                </div>
                <div className='tempInput'>
                  {/* <i class="fa-solid fa-temperature-quarter fa-4x"></i> */}
                  <img src='./Temp.png' alt=''></img>
                  <input
                    onKeyPress={(e) =>
                      !/[0-9]/.test(e.key) && e.preventDefault()
                    }
                    placeholder='Min'
                    className='Tempmin'
                    defaultValue={tree?.base_temp?.set[0]}
                  ></input>
                  <input
                    onKeyPress={(e) =>
                      !/[0-9]/.test(e.key) && e.preventDefault()
                    }
                    placeholder='Mid'
                    className='Tempmid'
                    defaultValue={tree?.base_temp?.set[1]}
                  ></input>
                  <input
                    onKeyPress={(e) =>
                      !/[0-9]/.test(e.key) && e.preventDefault()
                    }
                    placeholder='Max'
                    className='Tempmax'
                    defaultValue={tree?.base_temp?.set[2]}
                  ></input>
                </div>
              </div>
              <div className='botToggle'>
                <i class='fa-solid fa-robot fa-4x'></i>
                <div className='switch'>
                  <Switch className='switch' isOn={value} />
                </div>
              </div>
            </div>
            <div className='discri'>
              <img src='./tree.png' alt=''></img>
              <br></br>
              <textarea
                placeholder='Name Tree'
                className='nametree'
                defaultValue={tree?.tree_name}
              ></textarea>
              <br></br>
              <textarea
                placeholder='Discription...'
                className='discription'
                defaultValue={tree?.tree_desc}
              ></textarea>
            </div>
          </div>
        </div>
      </div>
    </body>
  );
}

export default PreferencePage;
