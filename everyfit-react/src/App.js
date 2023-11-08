import logo from './logo.svg';
import './App.css';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import { NavLink, Route, Routes } from 'react-router-dom';
import Home from './components/Home.js';


function App() {
  return (
    <div className='container-fluid my-5 py-5'>
      <Header />


      <div className='row'>
        <div className='col-md-8 offset-md-2'>
          <Routes>
            <Route exact path='/' element={<Home />}>홈페이지</Route>
        
          </Routes>
        </div>
      </div>



      <Footer />
    </div>
  );
}

export default App;
