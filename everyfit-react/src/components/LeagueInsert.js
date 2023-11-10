import axios from "axios";
import { useEffect, useState } from "react";

const LeagueInsert=(props)=>{
  const[eventList, setEventList] = useState([]);
  const[locationList, setLocationList] = useState([]);
  const[locationDepth1, setLocationDepth1] = useState([]);
  const[loactionDepth2List, setLocationDepth2List] = useState([]);
  const[league, setLeague] = useState({
    leagueNo: "",
    eventNo: "",
    leagueManager: "",
    leagueTitle: "",
    leagueDetail: "",
    leagueEntryFee: "",
    leagueStart: "",
    leagueEnd: "",
    leagueStatus: "",
    chatRoomNo: "1",
    locationNo: ""
  });

  const changeLeague=(e)=>{
    setLeague({
      ...league,
      [e.target.name]:e.target.value
    });
    findLocation();
  };

  const loadEventList=()=>{
    axios({
      url:`${process.env.REACT_APP_REST_API_URL}/info/event`,
      method:"get"
    })
    .then(response=>{
      setEventList(response.data);
    })
    .catch(err=>{

    })
  }
  const loadLocationList=()=>{
    axios({
      url:`${process.env.REACT_APP_REST_API_URL}/info/location`,
      method:"get"
    })
    .then(response=>{
      setLocationList(response.data);
    })
    .catch(err=>{

    })
  }

  const loadLoactionDepth2List=()=>{
    axios({
      url:`${process.env.REACT_APP_REST_API_URL}/info/location/${locationDepth1}`,
      method:"get"
    })
    .then(response=>{
      console.log(locationDepth1);
      setLocationDepth2List([]);
      setLocationDepth2List(response.data);
    })
    .catch(err=>{

    })
  }

  const findLocation=()=>{
    axios({
      url:`${process.env.REACT_APP_REST_API_URL}/info/locationfind/${league.locationNo}`,
      method:"get"
    })
    .then(response=>{
      setLocationDepth1([]);
      setLocationDepth1(response.data.locationDepth1);
      loadLoactionDepth2List();
    })
    .catch(err=>{

    })
  }

  useEffect(()=>{
    setLocationDepth2List([]);
    loadLoactionDepth2List();
  }, [league.locationNo])

  useEffect(()=>{
    loadEventList();
    loadLocationList();
  },[]);
  
  const insertLeague=()=>{
    axios({
      url:`${process.env.REACT_APP_REST_API_URL}/league/`,
      method:"post",
      data:league
    })
    .then(response=>{
      
    })
    .catch(err=>{});
  }
  

  return(
    <>
      <div className="row mt-4"><div className="col">
        <h1>리그 등록</h1>  
      </div></div>
      
      <div className="row mt-4"><div className="col">
        <label className="form-label">종목</label>
        <select name="eventNo" className="form-select" onChange={changeLeague}>
          <option value="">종목선택</option>
          {eventList.map(event=>(
            <option key={event.eventNo} value={event.eventNo}>{event.eventName}</option>
          ))}
        </select>
      </div></div>
      <div className="row mt-4"><div className="col">
        <label className="form-label">지역</label>
        <select name="locationNo" className="form-select " onChange={changeLeague}>
          <option value="">지역선택</option>
          {locationList.map(location=>(
            <option key={location.locationNo} value={location.locationNo}>{location.locationDepth1}</option>
          ))}
          <option value="경기도">경기도</option>
        </select>
        <select>
          <option>구</option>
        </select>
      </div></div>
      <div className="row mt-4"><div className="col">
        <label className="form-label">관리자</label>
        <input name="leagueManager" className="form-control"
          value={league.leagueManager} onChange={changeLeague}/>
      </div></div>
      <div className="row mt-4"><div className="col">
        <label className="form-label">제목</label>
        <input className="form-control" name="leagueTitle"
          value={league.leagueTitle} onChange={changeLeague}/>
      </div></div>
      <div className="row mt-4"><div className="col">
        <label className="form-label">참가비</label>
        <input className="form-control" name="leagueEntryFee"
          value={league.leagueEntryFee} onChange={changeLeague}/>
      </div></div>
      <div className="row mt-4"><div className="col">
        <label className="form-label">리그시작날짜</label>
        <input className="form-control" type="datetime-local" name="leagueStart"
          value={league.leagueStart} onChange={changeLeague}/>
      </div></div>
      <div className="row mt-4"><div className="col">
        <label className="form-label">리그종료날짜</label>
        <input className="form-control" type="datetime-local" name="leagueEnd"
          value={league.leagueEnd} onChange={changeLeague}/>
      </div></div>
      <div className="row mt-4"><div className="col">
        <label className="form-label">리그상태</label>
        <select className="form-select" name="leagueStatus"
          value={league.leagueStatus} onChange={changeLeague}>
          <option value="">리그상태 선택</option>
          <option>대기상태</option>
        </select> 
      </div></div>
      <div className="row mt-4"><div className="col">
        <label className="form-label">내용</label>
        <textarea className="form-control" name="leagueDetail" 
          rows="5" onChange={changeLeague}>{league.leagueDetail}</textarea>
      </div></div>
      <div className="row mt-4"><div className="col">
        <button type="button" className="btn btn-primary w-100">리그등록</button>
      </div></div>
      

    </>
  );
}
export default LeagueInsert;