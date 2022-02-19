import React ,{ Component }  from 'react';
import LineChart from '../components/Line Chart';
import './GraphPage.css';
import sunlogo from '../img/sun.png'
import tmplogo from '../img/tmp.png'
import wtrlogo from '../img/wtr.png'
import logo from '../img/logo.png'

class GraphPage extends Component {
  render(){
    return (
      <div className='all'>
			<div className='header'>
				  <nav className='sticky-top navbar navbar-expand-md navbar-light bg-success'>
			      <a href="#">
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
					<LineChart />
					<div className='icon'>
						<button className='btn'><img src={sunlogo} alt='sun'></img></button>
						<button className='btn green'><img src={wtrlogo} alt='sun'></img></button>
						<button className='btn'><img src={tmplogo} alt='sun'></img></button>
					</div>
					<img src={logo} alt='logo' className='logo' ></img>
				</div>
			</div>
      </div>
    );
  }
}

export default GraphPage