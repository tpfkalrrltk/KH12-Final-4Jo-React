import { useEffect, useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

const LeagueList = (props) => {

  const [leagueList, setLeagueList] = useState([]);
  const [leagueSearch, setLeagueSearch] = useState({
    leagueNo: "",
    leagueManager: "",
    leagueTitle: "",
    leagueEntryFee: "",
    leagueStatus: "",
    eventName: "",
    locationDepth1: "",
    locationDepth2: ""
  });
  const clearLeagueSearch=()=>{
    setLeagueSearch({
      leagueNo: "",
    leagueManager: "",
    leagueTitle: "",
    leagueEntryFee: "",
    leagueStatus: "",
    eventName: "",
    locationDepth1: "",
    locationDepth2: ""
    });
  };

  const changeLeagueSearch=(e)=>{
    setLeagueSearch({
      ...leagueSearch,
      [e.target.name]:e.target.value
    });
  };

  const searchLeague=()=>{
    axios({
      url:`${process.env.REACT_APP_REST_API_URL}/league/leagueList/`,
      method:"post",
      data:leagueSearch
    })
    .then(response=>{
      setLeagueList(response.data);
      clearLeagueSearch();
    })
    .catch(err=>{});
  }

  useEffect(()=>{
    searchLeague();
  }, []);

  return (
    <>
      <div className="row mt-4"><div className="col">
        <h1>리그 목록</h1>
        <NavLink to="/leagueInsert" className="btn btn-primary">리그 등록</NavLink>
      </div></div>

      <div className="row mt-4"><div className="col">
        <input type="number" className="form-control" name="leagueNo"
        value={leagueSearch.leagueNo} onChange={changeLeagueSearch}/>
        <input type="text" className="form-control" name="eventName"
        value={leagueSearch.eventName} onChange={changeLeagueSearch}/>
        <input type="text" className="form-control" name="leagueTitle"
        value={leagueSearch.leagueTitle} onChange={changeLeagueSearch}/>

        <select className="form-select" name="leagueStatus" 
          value={leagueSearch.leagueStatus} onChange={changeLeagueSearch}>
          <option value={""}>리그상태</option>
          <option>접수중</option>
          <option>접수마감</option>
          <option>대기상태</option>
          <option>진행중</option>
          <option>종료됨</option>
        </select>
        <input type="text" className="form-control" name="locationDepth1"
        value={leagueSearch.locationDepth1} onChange={changeLeagueSearch}/>
        <input type="text" className="form-control" name="locationDepth2"
        value={leagueSearch.locationDepth2} onChange={changeLeagueSearch}/>
        <button type="button" onClick={searchLeague}>검색</button>
      </div></div>

      <div className="row mt-4"><div className="col">
        <table className="table">
          <thead>
            <tr>
              <th>번호</th>
              <th>종목</th>
              <th>관리자</th>
              <th>제목</th>
              <th>상태</th>
              <th>지역</th>
            </tr>
          </thead>
          <tbody>
            {leagueList.map(league=>(
              <tr key={league.leagueNo}>
                <td>{league.leagueNo}</td>
                <td>{league.eventName}</td>
                <td>{league.leagueManager}</td>
                <td>{league.leagueTitle}</td>
                <td>{league.leagueStatus}</td>
                <td>{league.locationDepth1}-{league.locationDepth2}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div></div>
    </>
  );
}
export default LeagueList;