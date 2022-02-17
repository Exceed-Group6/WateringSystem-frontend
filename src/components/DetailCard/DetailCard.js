import React from 'react'
import './DetailCard.css'

const DetailCard = () => {
    return (
        <body>

            <div className="container">
                <div className="container-left">
                    <img src="./tree.jpeg" alt="tree"></img>
                    <div className="description">
                        <h3 color="gray">Description</h3>
                        <div>lorem ipsum dolor sit amet, consectetur adipiscing el</div>

                    </div>
                </div>
                <div class="d-flex justify-content-around">
                    <div className="container-right">
                        <div className="containter-right-text">
                            <h2>1800 Lux</h2>
                            <h2>54%</h2>
                            <h2>34°c</h2>
                        </div>

                        <div className="container-right-img">
                            <img src="./sun.jpeg" alt="sun"></img>
                            <img src="./water.jpeg" alt="water"></img>
                            <img src="./temp.jpeg" alt="temp"></img>
                        </div>
                        <div className="container-right-progress">


                            <div class="w3-container">
                                <div class="w3-light-grey">
                                    <div class="w3-green"></div>
                                </div><br></br>


                                <div class="w3-light-grey">
                                    <div class="w3-blue"></div>
                                </div><br></br>

                                <div class="w3-light-grey">
                                    <div class="w3-red"></div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="container-right">


                        <div className="container-right-img2">

                            <img src="./hourglass.png" alt="water"></img>
                        </div>
                        <div className="time-button">10 Sec</div>
                        <button className="watering-button">
                            <img src="./watering-plant.png" alt="watercan"></img>
                        </button>
                        <div className="container-right-progress">



                        </div>

                    </div>
                    <div className="container-right">

                        <a href="#" className="preference-button">Preference configuration

                        </a>
                        <a href="#">
                            <img className="pref-img" src="./edit.png" alt="edit" ></img>
                        </a>

                    </div>
                    <div className="container-right">
                        <a href="#" className="a-graph">
                            <p className="graph-button">
                                <img src="./graph.png" alt="graph"></img>
                            </p>
                        </a>
                        <button type="button" class="btn btn-danger">Delete this tree</button>
                    </div>
                </div>
            </div>

        </body >

    )
}

export default DetailCard