import React from 'react'
import './Addtree.css'

function Addtree() {
  return (
    <body>
    <div>
      <div className='Header'>
        <div className='row'>
          <div className='back'>
            <i class="fa-solid fa-angles-left fa-2x"></i>
          </div>
          <div className='name'>
            <h1>hi</h1>
          </div>
          <div className='saving'>
            <i class="fa-solid fa-floppy-disk fa-2x"></i>
          </div>
        </div>
      </div>
    <div className='container'>
      <div className='cardBack'> 
        <div className='cardbody'> 
          <div className='inputBar'>
            <div className='idInput'>
              <i class="fa-solid fa-id-badge fa-4x"></i>
              <input placeholder='UID' className='Id'></input>
            </div>
            <div className='threemid'>
              <div className='sunInput'>
                <i class="fa-solid fa-sun fa-4x"></i>
                <input placeholder='Min' className='Sunmin'></input>
                <input placeholder='Mid' className='Sunmid'></input>
                <input placeholder='Max' className='Sunmax'></input>
              </div>
              <div className='waterInput'>
                <i class="fa-solid fa-droplet fa-4x"></i>
                <input placeholder='Min' className='Watermin'></input>
                <input placeholder='Mid' className='Watermid'></input>
                <input placeholder='Max' className='Watermax'></input>
              </div>
              <div className='tempInput'>
                <i class="fa-solid fa-temperature-quarter fa-4x"></i>
                <input placeholder='Min' className='Tempmin'></input>
                <input placeholder='Mid' className='Tempmid'></input>
                <input placeholder='Max' className='Tempmax'></input>
              </div>
            </div>
            <div className='botToggle'>
              <i class="fa-solid fa-robot fa-4x"></i>
              
            </div>
          </div>
          <div className='discri'>
            <img src='./tree.png' alt=''></img>
            <br></br>
            <textarea placeholder='Name Tree' className='nametree'></textarea>
            <br></br>
            <textarea placeholder='Discription...' className='discription'></textarea>
          </div>
        </div>
      </div>
    </div>
    </div>
    </body>
  )
}

export default Addtree