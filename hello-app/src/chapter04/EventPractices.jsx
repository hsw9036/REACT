import React, {useState} from 'react';

const Eventpractices = () => {
 const [username, setUsername] = useState('');
 const [message, setMessage] = useState('');
 const onChangeUsername = e => setUsername(e.target.value);
 const onChangeMessage = e => setMessage(e.target.value);
 const onClick = () =>{
    alert (username + "??" + message);
    setUsername('');
    setMessage('');
 }
 const onKeyPress = e => {
    if(e.key ==='Enter'){
        onClick();
    }
 }
 return (
    <div>
        <h1>이벤트 연습</h1>
        <input type="text"
        name = "username"
        placeholder="유저명"
        value={username}
        onChange={onChangeUsername}
        />

        <input
        type="text"
        name = "message"
        placeholder="아무거나 입력해 보세요"
        value = {message}
        onChange={onChangeMessage}
        onKeyPress={onKeyPress}
        />
        <button onClick={onClick}>확인</button>
    </div>
 );
};
export default Eventpractices





/*import { Component } from "react";

class EventPractices extends Component {
    state = {
        message:'',
        username:''
    }

    handleChange = (e) => {
        this.setState ( {
            [e.target.name] : e.target.value
        });
    }

    handleClick = (e) =>{
        alert(this.state.username + '' + this.state.message);
        this.setState({
            username:'',
            message:''
        })
    }

    handleKeyPress = (e) =>{
        if(e.key === 'Enter'){
            this.handleClick();
        }
    }

    render() {
        return (
            <div>
                <h1>이벤트 연습</h1>
                <input
                    type="text"
                    name="username"
                    placeholder="유저명"
                    value={this.state.username}
                    onChange={this.handleChange}
                    onKeyPress={this.handleKeyPress}
                    />
                
                <input type = "text"
                name = "message"
                placeholder = "아무거나 입력해 보세요"
                value = {this.state.message}
                onChange = {this.handleChange}
                />               
                <button onClick ={this.handleClick}>확인</button>
            </div>
        );
    };
}
export default EventPractices; */