import { useState } from "react";

const IterationSample = () => {
    const [names, setName] = useState([
        {id: 1, text: "눈사람"},
        {id: 2, text: "얼음"},
        {id: 3, text: "눈"},
        {id: 4, text: "바람"}
    ])

    const [inputText, setInputText] = useState("");
    const [nextId, setNextid] = useState(5);

    const onChange = e => setInputText(e.target.value)
    const onClick = () => {
        const nextNames = names.concat({
            id: nextId,
            text: inputText
        });
        setNextid(nextId + 1);
        setName(nextNames);
        setInputText('');
    }
    const onRemove = id =>{
        const nextNames = names.filter(name=>name.id !==id);
        setName(nextNames);
    }

    const nameList = names.map(name=> (
        <li key={name.id} onDoubleClick = {()=>onRemove(name.id)}>
            {name.text}
        </li>
    ))

    const onKeyPress = e => {
        if(e.key === 'Enter') {
            this.onClick();
        }
    }

    const nameList12 = names.map(name => <li key={name.id}>{name.text}</li>)
    return(
        <>
            <input value={inputText} onChange={onChange} />
            <button 
                onClick={onClick}
                onKeyPress={onKeyPress}
            >추가</button>
            <ul>{nameList}</ul>
        </>
    );
}

// const IterationSample = () => {
//     const names = ['눈사람', '얼음', '눈', '바람'];
//     const nameList = names.map(name => <li>{name}</li>);
//     return <ul>{nameList}</ul>;
// };




/*import {useState} from 'react';

const IterationSample = () => {
    const [names, setName] = useState([
        {id : 1, text:'눈사람'},
        {id : 2, text:'얼음'},
        {id : 3, text:'눈'},
        {id : 4, text:'바람'}
    ])

const [inputText, setInputText] = useState('');
const [nextId, setNextId] = useState (5);

const nameList = names.map(name => <li key={name.id}>{name.text}</li>)
return <ul>{nameList}</ul>
};

const onClick = () => {
    const nextNames = names.concat ({
        id : nextId,
        text : inputText
    });
    setNextId(nextId + 1) ;
    setName (nextNames);
    setInputText('');
}

const nameList = names.map(name => <li key ={name.id}>{name.text}</li>)
return (
    <>
    <input value = {inputText} onChange ={onChange}/>
    <button onClick = {onClick}>추가</button>
    <ul>{nameList}</ul>
    </>
)
    */




/*
const IterationSample = () => {
    const names = ['눈사람','얼음','눈','바람'];
    const nameList = names.map(name => <li>{name}</li>);
    return <ul>{nameList}</ul>;
};
*/

export default IterationSample;