import logo from './images/logo.png';

const Footer = () => {

  return (
    <nav class="fixed-bottom bg-primary p-0">

      <div class="container p-0">
        <div className='row ms-5'>
          <div className=' col-6 '>
            <p class=" text-light"><small>COMPANY INFO.<br/>COMPANY : EVERY FIT<br/>ADDRESS : 07212 서울특별시 영등포구 양평동4가 2 길</small></p>
          </div>
          <div className='col-6 '>
            <p class=" text-light"><small>CS CENTER.<br/>TEL 02-6055-9955<br/>OPEN AM 09:00 ~ CLOSE PM 07:00 / SAT.SUN.HOLIDAY CLOSED</small></p>
          </div>
        </div>

      </div>


    </nav>
  )
}
export default Footer;
