import logo from './logo.svg';
import './App.css';

import Header from './components/Header.js';
import Footer from './components/Footer.js';
import { NavLink, Route, Routes } from 'react-router-dom';
import League from './components/League';
import Home from './components/Home.js';
import LeagueList from './components/LeagueList.js';
import FreeBoard from './components/FreeBoard.js';
import FreeBoardDetail from './components/FreeBoardDetail.js';




function App() {
  return (
    <div className='container-fluid my-5 py-5'>

      <Header />


      <div className='row mt-5'>
        <div className='col-md-8 offset-md-2 mt-5'>
          <Routes>
            <Route exact path='/' element={<Home />}>홈페이지</Route>
            <Route path='/freeBoard' element={<FreeBoard />}>자유게시판 목록</Route>
            <Route path='/freeBoardDetail' element={<FreeBoardDetail />}>자유게시판 상세</Route>
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
