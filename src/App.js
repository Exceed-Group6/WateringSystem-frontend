import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GraphPage from './pages/GraphPage';
// import CanvasJSReact from '../assets/canvasjs.react';
//var CanvasJSReact = require('./canvasjs.react');
// var CanvasJS = CanvasJSReact.CanvasJS;
// var CanvasJSChart = CanvasJSReact.CanvasJSChart;

function App() {
  return (
    <div className="App">
      {/* <h1>App</h1> */}
    <BrowserRouter>
      <Routes>
        <Route path='/graph' element={<GraphPage />}  />
      </Routes>
    </BrowserRouter>
    
    </div>
  );
}

export default App;
