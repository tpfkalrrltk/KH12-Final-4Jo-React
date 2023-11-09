import { useEffect, useState } from "react"
import axios from "axios"

const FreeboardDetail = () => {

    return (

        <div className="container-fluid">

            <div className="row">
                <div className="col text-primary mb-4 offset-2">
                    <h1>자유 게시판 상세페이지</h1>
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
                            <tr className="text-center row offset-2">
                                <td className="col-2 text-primary">s</td>
                                <td className="col-2 text-primary">s</td>
                                <td className="col-5 text-primary">s</td>
                            </tr>
                        </tbody>
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <tfoot>
                            <tr className="text-center row offset-2">                           
                                <th className="col-9 bg-primary text-light">내용</th>
                            </tr>
                            <tr className="text-center row offset-2">
                                <td className="col-9 text-primary">내용 입니다.</td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>

            <div className="row">
                <div className="col-2 offset-5">
                    <a href="/"><span class="badge rounded-pill bg-success mb-3 w-100"><h6 className="mt-1">수정</h6></span></a>
                </div>
                <div className="col-2 ">
                    <a href="/"><span class="badge rounded-pill bg-danger mb-3 w-100"><h6 className="mt-1">삭제</h6></span></a>

                </div>
            </div>

        </div>
    )

}; export default FreeboardDetail;