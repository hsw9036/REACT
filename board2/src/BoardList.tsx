import { Component } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Axios from "axios";

const Board = ({
    id,
    title,
    registerId,
    registerDate,
} : {
    id : number;
    title : string;
    registerId : string;
    registerDate : string;
}) => {
    return (
        <tr>
            <td>
                <input type = "checkbox" ></input>
            </td>
            <td>{id}</td>
            <td>{title}</td>
            <td>{registerId}</td>
            <td>{registerDate}</td>
        </tr>
    );
};



class BoardList extends Component {
    state = {
        boardList : [],
    };

    getList = () => {
        Axios.get("http://localhost:8000/list", {})
        .then((res)=>{
            const {data} = res;
            this.setState ({
                boardList : data,
            });
        })
        .catch((e) => {
            console.error(e);
        });
    };

    componentDidMount() {
        this.getList();
    }

    render() {
        const { boardList } : { boardList : any} = this.state;

        return (
            <div>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>선택</th>
                            <th>번호</th>
                            <th>제목</th>
                            <th>작성자</th>
                            <th>작성일</th>
                        </tr>
                    </thead>
                    <tbody>
                    {boardList.map((v: any) => {
                            return (
                                <Board
                                    id={v.BOARD_ID}
                                    title={v.BOARD_TITLE}
                                    registerId={v.REGISTER_ID}
                                    registerDate={v.REGISTER_DATE}
                                    key={v.BOARD_ID}
                                    
                                />
                            );
                        })}

                    </tbody>
                </Table>
                <Button variant = "info" >글쓰기</Button>
                <Button variant = "secondary" >수정하기</Button>
                <Button variant = "danger" >삭제하기</Button>
            </div>
        );
    }
}

export default BoardList;


// const submitTest = () =>{
//     Axios.get("http://localhost:8000/",{}).then(()=>{
//         alert("등록 완료!");
//     });
// };


// class BoardList extends Component {
//     render () {
//         return (
//             <div>
//             <Table striped bordered hover >
//                 <thead>
//                     <tr>
//                         <th> 선택 </th>
//                         <th> 번호 </th>
//                         <th> 제목 </th>
//                         <th> 작성자 </th>
//                         <th> 작성일 </th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     <tr>
//                         <td>
//                             <input type="checkbox"></input>
//                         </td>
//                         <td>1</td>
//                         <td>게시글1</td>
//                         <td>artistJay</td>
//                         <td>2022-03-18</td>
//                     </tr>
//                     <tr>
//                         <td>
//                             <input type="checkbox"></input>
//                         </td>
//                         <td>2</td>
//                         <td>게시글2</td>
//                         <td>artistJay</td>
//                         <td>2022-03-19</td>
//                     </tr>
//                     <tr>
//                         <td>
//                            <input type="checkbox"></input>
//                         </td>
//                         <td>3</td>
//                         <td>게시글3</td>
//                         <td>artistJay</td>
//                         <td>2022-03-21</td>
//                     </tr>
//                 </tbody>
//             </Table>
//             <Button variant="info" onClick={submitTest}>글쓰기</Button>
//             <Button variant="secondary">수정하기</Button>
//             <Button variant="danger">삭제하기</Button>
//             </div>
//         );
//     };
// };

// export default BoardList;