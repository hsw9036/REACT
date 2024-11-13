import { Component } from "react" ;
import Axios from "axios";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

interface IProps {
    isModifyMode : boolean;
    boardId : number;
    handleCancel : any;
}



class Write extends Component <IProps> {
    constructor(props:any) {
        super(props);
        this.state = {
            title : "",
            content : "",
            isRendered : false,
        };
    }

    state = {
        title : "",
        content : "",
        isRendered : false,
    };

    write = () =>{
        Axios.post ("http://localhost:8000/insert", {
            title : this.state.title,
            content : this.state.content,
        })
        .then((res)=>{
            this.setState({
                title : "",
                content : "",
            });
            this.props.handleCancel();
        })
        .catch((e)=>{
            console.error(e);
        });
    };

    update = () =>{
        Axios.post("http://localhost:8000/update", {
            title : this.state.title,
            content : this.state.content,
            id : this.props.boardId,
        })
        .then((res) => {
            this.setState({
                title : "",
                content : "",
            });
            this.props.handleCancel();
        })
        .catch((e)=> {
            console.error(e);
        });
    };
    detail = () => {
        Axios.get (`http://localhost:8000/detail?id=${this.props.boardId}`)
        .then((res)=> {
            if (res.data.length > 0) {
                    this.setState ({
                        title : res.data[0].BOARD_TITLE,
                        content : res.data[0].BOARD_CONTENT,
                    });
                }
    })
    .catch((e)=>{
        console.error(e);
    });
  };


handleChange = (e:any) =>{
    this.setState ({
        [e.target.name] : e.target.value,
    });
};

componentDidUpdate = (prevProps : any) => {
    if (this.props.isModifyMode && this.props.boardId !== prevProps.boardId) {
        this.detail();
    }
};

render () {
    return (
        <div>
            <Form>
                <Form.Group className="mb-3">
                    <Form.Label>제목</Form.Label>
                    <Form.Control
                    type="text"
                    name="title"
                    value={this.state.title}
                    onChange={this.handleChange}
                    placeholder="제목을 입력하세요"
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>내용</Form.Label>
                    <Form.Control
                    as="textarea"
                    name="content"
                    value={this.state.content}
                    onChange={this.handleChange}
                    placeholder="내용을 입력하세요"
                    />
                </Form.Group>
            </Form>
            <Button variant ="info" onClick={this.props.isModifyMode ? this.update : this.write}>
                작성완료
            </Button>

            <Button variant = "secondary" onClick = {this.props.handleCancel}>
                취소
            </Button>
        </div>
    );
}
}


export default Write;

// import { Component } from "react";
// import Form from "react-bootstrap/Form";
// import { Button } from "react-bootstrap";

// class Write extends Component {
//     render () {
//         return (
//             <div>
//                 <Form>
//                     <Form.Group className = " mb-3 " controlId="exampleForm.ControlInput1">
//                         <Form.Label>제목</Form.Label>
//                         <Form.Control type = "email" placeholder="name@example.com"/>
//                     </Form.Group>
//                         <Form.Group className = " mb-3 " controlId="exampleForm.ControlTextarea1">
//                             <Form.Label>내용</Form.Label>
//                             <Form.Control as = "textarea" />
//                         </Form.Group>
//                 </Form>
//                 <Button variant="info" > 작성완료 </Button>
//                 <Button variant="secondary"> 취소 </Button>
//             </div>
//         );
//     }
// }



// export default Write;