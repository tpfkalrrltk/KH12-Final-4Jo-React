
const League = (props) => {
  return (
    <div className="row">
      <div className="col-md-8 offset-md-2">
        <div className="row mt-2">
          <div className="col">
            <h1>리그페이지</h1>
          </div>
        </div>
        <div className="row mt-2"><div className="col">
          <label className="form-label">종목</label>
          <input type="text" name="eventNo" className="form-control"/>
        </div></div>
        <div className="row mt-2"><div className="col">
          <label className="form-label">담당관리자</label>
          <input type="text" name="leagueManager" className="form-control"/>
        </div></div>
        <div className="row mt-2"><div className="col">
          <label className="form-label">리그이름</label>
          <input type="text" name="leagueTitle" className="form-control"/>
        </div></div>
        <div className="row mt-2"><div className="col">
          <label className="form-label">리그설명</label>
          <input type="text" name="leagueDetail" className="form-control"/>
        </div></div>
        <div className="row mt-2"><div className="col">
          <label className="form-label">참가비</label>
          <input type="text" name="leagueEntryFee" className="form-control"/>
        </div></div>
        <div className="row mt-2"><div className="col">
          <label className="form-label">리그시작날짜</label>
          <input type="date" name="leagueStart" className="form-control"/>
        </div></div>
        <div className="row mt-2"><div className="col">
          <label className="form-label">리그종료날짜</label>
          <input type="date" name="leagueEnd" className="form-control"/>
        </div></div>
        <div className="row mt-2"><div className="col">
          <label className="form-label">종목</label>
          <input type="text" name="eventNo" className="form-control"/>
        </div></div>
        <div className="row mt-2"><div className="col">
          <label className="form-label">리그상태</label>
          <input type="text" name="leagueStatus" className="form-control"/>
        </div></div>
        <div className="row mt-2"><div className="col">
          <label className="form-label">채팅방번호</label>
          <input type="text" name="chatRoomNo" className="form-control"/>
        </div></div>
      </div>
    </div>
  );
}

export default League;