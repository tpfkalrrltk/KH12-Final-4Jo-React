import logo from './logo.svg';
import './App.css';
import {Route, Routes} from "react-router";
import Menu from './components/Menu.js';
import Home from './components/Home.js';
import League from './components/League';


function App() {
  return (
    <div className='container-fluid my-5 py-5'>
      <Menu />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route path="/league" element={<League />}></Route>
      </Routes>


    </div>
  );
}

export default App;
