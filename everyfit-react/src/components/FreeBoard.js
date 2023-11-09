import { useEffect, useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom";

const Freeboard = () => {

    const [freeBoardList, setFreeBoardList] = useState([]);

    const reload = async () => {
        const response = await axios({
            url: 'http://localhost:8080/freeBoard/',
            method: 'GET'
        });
        setFreeBoardList(response.data);
        console.log(response.data);
    };

    useEffect(() => {
        reload();
    }, []);


    return (

        <div className="container-fluid">

            <div className="row">
                <div className="col text-primary  offset-2">
                    <h1>자유 게시판</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-2 offset-7">
                   <span class="badge rounded-pill bg-primary mb-3 w-100"><h6 className="mt-1">글 등록</h6></span>

                </div>
            </div>
            <div className="row">
                <div className="col">
                    <table className="table table-hover">
                        <thead >
                            <tr className="text-center row  offset-2">
                                <td className="col-2 bg-primary text-light">번호</td>
                                <td className="col-2 bg-primary text-light">카테고리</td>
                                <td className="col-5 bg-primary text-light"> 제목</td>
                            </tr>
                        </thead>
                        <tbody>
                            {freeBoardList.map((freeBoard, index) => (

                                <tr className="text-center row offset-2">
                                    <td className="col-2 text-primary">{freeBoard.freeBoardNo}</td>
                                    <td className="col-2 text-primary">{freeBoard.freeBoardCategory}</td>
                                    <td className="col-5 text-primary"><Link to={"/freeBoardDetail"} > {freeBoard.freeBoardTitle} </Link></td>

                                </tr>

                            ))}


                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )

}; export default Freeboard;