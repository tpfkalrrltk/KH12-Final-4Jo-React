import logo from './logo.svg';
import './App.css';

import Header from './components/Header.js';
import Footer from './components/Footer.js';
import { NavLink, Route, Routes } from 'react-router-dom';
import League from './components/League';
import Home from './components/Home.js';
import LeagueList from './components/LeagueList.js';



function App() {
  return (
    <div className='container-fluid my-5 py-5'>

      <Header />


      <div className='row'>
        <div className='col-md-8 offset-md-2'>
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route path="/league" element={<League />}></Route>
            <Route path="/leagueList" element={<LeagueList />}></Route>
          </Routes>
        </div>
      </div>



      <Footer />

    </div>
  );
}

export default App;
