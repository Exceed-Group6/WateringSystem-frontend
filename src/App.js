import "./App.css";
import Addtree from "./pages/Addtree";
import PreferencePage from "./pages/PreferencePage";
import Detail from "./pages/Detail/Detail";
import Home from "./pages/Home";
// import { Route, Routes } from "react-router-dom";

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GraphPage from './pages/GraphPage';
// import CanvasJSReact from '../assets/canvasjs.react';
//var CanvasJSReact = require('./canvasjs.react');
// var CanvasJS = CanvasJSReact.CanvasJS;
// var CanvasJSChart = CanvasJSReact.CanvasJSChart;

function App() {
  return (
    <div className='App'>
      {/* <Detail></Detail> */}
      <Routes>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/addTree' element={<Addtree />}></Route>

        <Route path='/detail/:treeId' element={<Detail />}></Route>

        <Route path='/preference/:treeId' element={<PreferencePage />}></Route>
        <Route path='*' element={<Home />}></Route>
        <Route path='/graph/:treeId' element={<GraphPage />}  />
      </Routes>
    </div>
  );
}

export default App;
