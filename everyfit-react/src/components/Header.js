import logo from './images/logo.png';
import { AiTwotoneBell } from "react-icons/ai";
import { FaList } from "react-icons/fa";
import { FiLogIn } from "react-icons/fi";
import { SiAdobeindesign } from "react-icons/si";
import { VscSignIn } from "react-icons/vsc";
import { RiPassPendingLine } from "react-icons/ri";
import { useMediaQuery } from 'react-responsive';
import { NavLink } from 'react-router-dom';
import { Link, NavLink } from 'react-router-dom';


const Header = () => {


  const isPc = useMediaQuery({
    query: "(min-width:993px)"
  });

  const languageText = isPc ?

    <nav className="navbar navbar-expand-lg bg-primary fixed-top p-0" data-bs-theme="dark">
      <div className="container-fluid col-9">
        <a className="navbar-brand ms-4">
        <Link to="/"><img src={logo} width="110px" height="100px" /></Link></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse row" id="navbarColor01">
          <ul className="navbar-nav me-auto ">

            <li className="nav-item col-9">
              <form className="d-flex ">
                <input className="form-control me-sm-2 bg-light ms-5 col-8 text-primary" type="search" placeholder="검색어를 입력해주세요" />
                <button className="btn btn-light my-2 my-sm-0 bg-light text-primary" type="submit">Search</button>
              </form>
            </li>

          </ul>

        </div>
      </div>

      <div className="" >
        <ul className="navbar-nav  row">

          <li className="nav-item me-1  col-3  ">
            <button type="button  " className=" btn btn-outline-primary text-light border-light mt-3"  ><h3><RiPassPendingLine /></h3></button>
          </li>

          <li className="nav-item me-1 col-3 ">
            <button type="button " className=" btn btn-light text-primary mt-3"><h3><SiAdobeindesign /></h3></button>
          </li>

          <li className="nav-item dropdown col-5 ">
            <a className="nav-link dropdown-toggle text-light mt-2 me-5 pe-5" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false"><h5><FaList /></h5></a>
            <div className="dropdown-menu bg-primary ">
              <a className="dropdown-item text-light" href="#">모임 목록</a>
              <NavLink        
              style={({ isActive }) => ({ color: isActive ? 'burlywood' : 'white' })}
              className= "dropdown-item" to="/leagueList">리그 목록</NavLink>

              <NavLink        
              style={({ isActive }) => ({ color: isActive ? 'burlywood' : 'white' })}
              className= "dropdown-item" to="/freeBoard">자유 게시판</NavLink>

              <a className="dropdown-item text-light" href="#">여성 전용 모임</a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item text-light" href="#">특별 기능</a>
            </div>
          </li>

        </ul>
      </div>

    </nav>

    :

    <nav className="navbar navbar-expand-lg bg-primary fixed-top p-0" data-bs-theme="dark">
      <div className="container-fluid col-9">
        <a className="navbar-brand ms-4" href="/"><img src={logo} width="110px" height="100px" /></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse row" id="navbarColor01">
          <ul className="navbar-nav me-auto ">

            <li className="nav-item col-9">
              <form className="d-flex ">
                <input className="form-control me-sm-2 bg-light ms-5 col-4 text-primary" type="search" placeholder="검색어를 입력해주세요" />
                <button className="btn btn-light my-2 my-sm-0 bg-light text-primary" type="submit">Search</button>
              </form>
            </li>

            <li className="nav-item dropdown col-5 offset-1">
              <div className='container-fluid dropdown-item'>
                <div className='row'>
                  <div className='col-2'>
                    <a href='#'><h3><RiPassPendingLine className='text-light' /></h3></a>
                  </div>

                  <div className='col'>
                    <a href='#'><h3><SiAdobeindesign className='text-light' /></h3></a>
                  </div>

                </div>
              </div>
              <NavLink className=
                // eslint-disable-next-line no-restricted-globals
                {`nav-link ${location.pathname === '/freeBoard' ? 'active' : ''}`}
                to="/freeBoard">모임 만들기</NavLink>
                
              <NavLink className=
                // eslint-disable-next-line no-restricted-globals
                {`nav-link ${location.pathname === '/freeBoard' ? 'active' : ''}`}
                to="/freeBoard">리그 목록</NavLink>

              <NavLink className=
                // eslint-disable-next-line no-restricted-globals
                {`nav-link ${location.pathname === '/freeBoard' ? 'active' : ''}`}
                to="/freeBoard">자유게시판</NavLink>


              <a className="dropdown-item text-light" href="#">여성 전용1 모임</a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item text-light" href="#">특별 기능</a>

            </li>



          </ul>

        </div>
      </div>

      <div className="" >
        <ul className="navbar-nav  row">




        </ul>
      </div>

    </nav>
    ;


  return (
    <>
      {languageText}
    </>
  )
}
export default Header;
