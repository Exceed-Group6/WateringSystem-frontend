import "./App.css";
import Addtree from "./pages/Addtree";
import PreferencePage from "./pages/PreferencePage";
import Detail from "./pages/Detail/Detail";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className='App'>
      {/* <Detail></Detail> */}
      <Routes>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/addTree' element={<Addtree />}></Route>
        <Route path='/detail' element={<Detail />}></Route>
        <Route path='/detail/:treeId' element={<Detail />}></Route>
        <Route path='/preference/' element={<PreferencePage />}></Route>
        <Route path='/preference/:treeId' element={<PreferencePage />}></Route>
        <Route path='*' element={<Home />}></Route>
      </Routes>
    </div>
  );
}

export default App;
