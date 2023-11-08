import logo from './images/logo.png';
import { AiTwotoneBell } from "react-icons/ai";
import { FaList } from "react-icons/fa";
import {FiLogIn} from "react-icons/fi";
import {SiAdobeindesign} from "react-icons/si";
import {VscSignIn} from "react-icons/vsc";
import {RiPassPendingLine} from "react-icons/ri";

const Header = () => {

  return (
    <>
      <nav class="navbar navbar-expand-lg bg-primary fixed-top p-0" data-bs-theme="dark">
        <div class="container-fluid col-9">
          <a class="navbar-brand ms-4" href="/"><img src={logo} width="110px" height="100px" /></a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse row" id="navbarColor01">
            <ul class="navbar-nav me-auto ">

              <li class="nav-item col-9">
                <form class="d-flex ">
                  <input class="form-control me-sm-2 bg-light ms-5 col-8 text-primary" type="search" placeholder="검색어를 입력해주세요" />
                  <button class="btn btn-light my-2 my-sm-0 bg-light text-primary" type="submit">Search</button>
                </form>
              </li>

            </ul>

          </div>
        </div>

        <div class="" >
          <ul class="navbar-nav  row">



            <li class="nav-item me-1  col-3  ">
              <button type="button  " class=" btn btn-outline-primary text-light border-light mt-3"  ><h3><RiPassPendingLine /></h3></button>
            </li>

            <li class="nav-item me-1 col-3 ">
              <button type="button " class=" btn btn-light text-primary mt-3"><h3><SiAdobeindesign/></h3></button>
            </li>


            <li class="nav-item dropdown col-5 ">
              <a class="nav-link dropdown-toggle text-light mt-2 me-5 pe-5" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false"><h5><FaList /></h5></a>
              <div class="dropdown-menu bg-primary ">
                <a class="dropdown-item text-light" href="#">모임 목록</a>
                <a class="dropdown-item text-light" href="#">리그 목록</a>
                <a class="dropdown-item text-light" href="#">여성 전용 모임</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item text-light" href="#">특별 기능</a>
              </div>
            </li>




          </ul>
        </div>








      </nav>

    </>
  )
}
export default Header;
