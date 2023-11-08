import logo from './images/logo.png';
import {AiTwotoneBell} from "react-icons/ai";

const Menu = () => {

  return (
    <>
      <nav class="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
        <div class="container-fluid col-9">
          <a class="navbar-brand ms-4" href="#"><img src={logo} width="110px" height="100px" /></a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse row" id="navbarColor01">
            <ul class="navbar-nav me-auto ">

              <li class="nav-item col-9">
                <form class="d-flex ">
                  <input class="form-control me-sm-2 bg-light ms-5 col-8" type="search" placeholder="검색어를 입력해주세요" />
                  <button class="btn btn-light my-2 my-sm-0 bg-light text-primary" type="submit">Search</button>
                </form>
              </li>

            </ul>

          </div>
        </div>

        <div class="collapse navbar-collapse row" id="navbarColor02">
          <ul class="navbar-nav me-auto col-8">

          <li class="nav-item me-4">
             <h3> <AiTwotoneBell  className='text-light' /></h3>
            </li>

            <li class="nav-item me-3 ">
              <button type="button  " class=" btn btn-outline-primary text-light border-light"  >로그인</button>
            </li>

            <li class="nav-item ">
              <button type="button " class=" btn btn-light text-primary">회원가입</button>
            </li>

          </ul>
        </div>

      </nav>

    </>
  )
}
export default Menu;
