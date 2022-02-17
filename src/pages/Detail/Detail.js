import React from 'react'
import DetailCard from '../../components/DetailCard/DetailCard'
import './Detail.css'
const Detail = () => {
    return (

        <body>
            <nav className="sticky-top navbar navbar-expand-md navbar-light bg-success">
                <a href="#">
                    <i class="fa-solid fa-angles-left fa-2xl"></i>
                </a>
                <h1 className="title" >Tree 1 </h1>
            </nav>
            <div> <DetailCard></DetailCard></div>
        </body>
    )
}

export default Detail