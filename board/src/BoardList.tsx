import { Component } from "react";
import Axios from "axios";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

const Board = ({
    id,
    title,
    registerId,
    registerDate,
    props,
}: {
    id: number;
    title: string;
    registerId: string;
    registerDate: string;
    props: any;
}) => {
    return (
        <tr>
            <td>
                <input
                    type="checkbox"
                    value={id}
                    onChange={(e) => {
                        props.onCheckboxChange(e.currentTarget.checked, e.currentTarget.value);
                    }}
                ></input>
            </td>
            <td>{id}</td>
            <td>{title}</td>
            <td>{registerId}</td>
            <td>{registerDate}</td>
        </tr>
    );
};

interface IProps {
    isComplete: boolean;
    handleModify: any;
    renderComplete: any;
}

/**
 * BoardList class
 * @param {SS} e
 */
class BoardList extends Component<IProps> {
    /**
     * @param {SS} props
     */
    constructor(props: any) {
        super(props);
        this.state = {
            boardList: [],
            checkList: [],
        };
    }

    state = {
        boardList: [],
        checkList: [],
    };

    getList = () => {
        Axios.get("http://localhost:8000/list", {})
            .then((res) => {
                const { data } = res;
                this.setState({
                    boardList: data,
                });
                this.props.renderComplete();
            })
            .catch((e) => {
                console.error(e);
            });
    };

    /**
     * @param {boolean} checked
     * @param {any} id
     */
    onCheckboxChange = (checked: boolean, id: any) => {
        const list: Array<string> = this.state.checkList.filter((v) => {
            return v !== id;
        });

        if (checked) {
            list.push(id);
        }

        this.setState({
            checkList: list,
        });
    };

    /**
     */
    componentDidMount() {
        this.getList();
    }

    /**
     */
    componentDidUpdate() {
        if (!this.props.isComplete) {
            this.getList();
        }
    }

    handleDelete = () => {
        if (this.state.checkList.length === 0) {
            alert("삭제할 게시글을 선택하세요.");
            return;
        }
    
        let boardIdList = "";
    
        this.state.checkList.forEach((v: any) => {
            boardIdList += `'${v}',`;
        });
    
        Axios.post("http://localhost:8000/delete", {
            boardIdList: boardIdList.substring(0, boardIdList.length - 1),
        })
            .then(() => {
                this.getList();
            })
            .catch((e) => {
                console.error(e);
            });
    };




    /**
     * @return {Component} Component
     */
    render() {
        const { boardList }: { boardList: any } = this.state;

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
                                    props={this}
                                />
                            );
                        })}
                    </tbody>
                </Table>
                <Button variant="info">글쓰기</Button>
                <Button
                    variant="secondary"
                    onClick={() => {
                        this.props.handleModify(this.state.checkList);
                    }}
                >
                    수정하기
                </Button>
                <Button variant="danger" onClick={this.handleDelete}>
                    삭제하기
                </Button>

            </div>
        );
    }
}

export default BoardList;


// import { Component } from "react";
// import Table from "react-bootstrap/Table";
// import Button from "react-bootstrap/Button";
// import Axios from "axios";


// const Board = ({
// id,
// title,
//     registerId,
//     registerDate,
// } : {
//     id : number;
//     title : string;
//     registerId : string;
//     registerDate : string;
// }) => {
//     return (
//         <tr>
//             <td>
//                 <input type="checkbox"></input>
//             </td>
//             <td>{id}</td>
//             <td>{title}</td>
//             <td>{registerId}</td>
//             <td>{registerDate}</td>
//         </tr>
//     );
// };


// class BoardList extends Component {
//     state = {
//         boardList : [],
//     };

   
//     getList = () => {
//        Axios.get("http://localhost:8000/list", {})
//         .then((res)=>{
//             const {data} = res;
//             this.setState({
//                 boardList : data,
//             });
//         })
//         .catch((e)=>{
//             console.error(e);
//         });
//     };
//     componentDidMount() {
//         this.getList();
//     }
    
//     render() {
//         const { boardList } : { boardList : any } = this.state;

//         return(
//             <div>
//                 <Table striped bordered hover>
//                     <thead>
//                         <tr>
//                             <th>선택</th>
//                             <th>번호</th>
//                             <th>제목</th>
//                             <th>작성자</th>
//                             <th>작성일</th>
//                         </tr>
//                     </thead>
                    
//                     <tbody>
//                         {
//                             boardList.map((v:any)=>{
//                                 return(
//                                     <Board
//                                     id={v.Board_Id}
//                                     title={v.Board_TITLE}
//                                     registerId={v.REGISTER_ID}
//                                     registerDate={v.REGISTER_DATE}
//                                     key={v.BOARD_ID}
//                                     />
//                                 );
//                             })}
//                     </tbody>
//                 </Table>
//                 <Button variant="info">글쓰기</Button>
//                 <Button variant="secondary">수정하기</Button>
//                 <Button variant="danger" >삭제하기</Button>
//             </div>
//         );
//     }
// }

// export default BoardList;


// /**
//  * BoardList class
//  */

// const submitTest = () => {
//     Axios.get("http://localhost:8000/",{}).then (()=>{
//         alert("등록완료!");
//     })
// }

// class BoardList extends Component {
// //     /**
// //      * @return {Component} Component
// //      */

    
    
//     render() {
//         return (
//             <div>
//             <Table striped bordered hover>
//                 <thead>
//                     <tr>
//                         <th>번호</th>
//                         <th>제목</th>
//                         <th>작성자</th>
//                         <th>작성일</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     <tr>
//                         <td>
//                             <input type="checkbox"></input>
//                         </td>
//                         <td>1</td>
//                         <td>게시글1</td>
//                         <td>artistGay</td>
//                         <td>2022-03-19</td>
//                     </tr>
//                     <tr>
//                         <td>
//                             <input type="checkbox"></input>
//                         </td>
//                         <td>2</td>
//                         <td>게시글2</td>
//                         <td>artistGay</td>
//                         <td>2022-03-19</td>
//                     </tr>
//                     <tr>
//                         <td>
//                             <input type="checkbox"></input>
//                         </td>
//                         <td>3</td>
//                         <td>게시글2</td>
//                         <td>artistGay</td>
//                         <td>2022-03-28</td>
//                     </tr>
//                 </tbody>
//             </Table>
//             <Button variant = "info" onClick={submitTest}>글쓰기</Button>
//             <Button variant = "secondary">수정하기</Button>
//             <Button variant = "danger">삭제하기</Button>
//             </div>
//         );
//     }
// }

// export default BoardList;

