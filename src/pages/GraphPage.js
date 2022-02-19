import React ,{ Component }  from 'react';
import './GraphPage.css';
import sunlogo from '../img/sun.png'
import tmplogo from '../img/tmp.png'
import wtrlogo from '../img/wtr.png'
import logo from '../img/logo.png'
import axios from 'axios'
import { Link, useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { getTreeById } from "../services/api"
import LineChart from '../components/Line Chart';
import LineChartTemp from '../components/Line ChartTemp';
import LineChartLight from '../components/Line ChartLight';


const GraphPage = () => {
	const [charttype, setCharttype] = useState(2);
	const Tree = useParams()
	// render(){
    return (
      <div className='all'>
			<div className='header'>
				  <nav className='sticky-top navbar navbar-expand-md navbar-light bg-success'>
			      <a href={`/detail/${Tree.treeId}`}>
					  <i class="fa-solid fa-angles-left fa-2xl"></i>
			      </a>
				  <div className='text'>
			      <h1 className='title'>Statistic</h1>
			      <i class="fa-solid fa-chart-line fa-2xl"></i>
				  </div>
			    </nav>
			</div>
			<div className='body'>
				<div className='card'>
					<div className={`${charttype===1 ? 'dis' : 'disnone'}`}><LineChartLight  /></div>
					<div className={`${charttype===2 ? 'dis' : 'disnone'}`}><LineChart  /></div>
					<div className={`${charttype===3 ? 'dis' : 'disnone'}`}><LineChartTemp  /></div>
					
					
					
					<div className='icon'>
						<button className={`${charttype===1 ? 'green' : 'btn'}`} onClick={ () => {setCharttype(1)} } ><img src={sunlogo} alt='sun' className='img'></img></button>
						<button className={`${charttype===2 ? 'green' : 'btn'}`} onClick={ () => {setCharttype(2)} } ><img src={wtrlogo} alt='wtr' className='img'></img></button>
						<button className={`${charttype===3 ? 'green' : 'btn'}`} onClick={ () => {setCharttype(3)} } ><img src={tmplogo} alt='tmp' className='img'></img></button>
					</div>
					<img src={logo} alt='logo' className='logo' ></img>
				</div>
			</div>
      </div>
    );
//   }
}

export default GraphPage;