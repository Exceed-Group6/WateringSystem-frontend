import React from 'react'
import './DetailCard.css'

const DetailCard = () => {
    return (
        <body>

            <div className="container">
                <div className="container-left">

                    <img src="./tree.jpeg" alt="tree"></img>
                    <div className="description">
                        Description
                        <div>lorem ipsum dolor sit amet, consectetur adipiscing el</div>

                    </div>
                </div>

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
                </div>
            </div>

        </body >

    )
}

export default DetailCard