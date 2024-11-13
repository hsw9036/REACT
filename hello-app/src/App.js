import { Component } from "react";
import IterationSample from "./chapter04/IterationSample";
class App extends Component {
  render(){
    return(
      <IterationSample/>
    )
  }
}

/* import { Component } from "react";
import ScrollBox from "./chapter04/ScrollBox";
class App extends Component {
  render(){
    return (
      <div>
        <ScrollBox ref= {(ref)=>this.ScrollBox=ref} />
        <button onClick = {()=>this.ScrollBox.scrollToBottom()}>
        맨 밑으로
        </button>
      </div>
    )
  }
}
*/

/*
import { Component } from "react";
import ValidationSample from "./chapter04/ValidationSample";

class App extends Component {
  render(){
    return(
      <ValidationSample></ValidationSample>
    )
  }
}
*/




//import EventPractices from "./chapter04/EventPractices";

//const App = () =>{
//  return <EventPractices/>
//}





// import './App.css';

// import MyComponent from "./chapter01/MyComponent";

// const App = () =>{
//   return <MyComponent>리액트 초보</MyComponent>;
// }


// import React from "react";
//import  "./App.css"
// import S_Props from "./chapter03/S_Props";

// function App(){
//   return(
//     <div>
//       <h1>Start React !!</h1>
//       <p>HTML 적용하기</p>
//       <S_Props props_val="This is Props" />
//     </div>
//   )

// }

// export default App;

/*
import {Componet} from "react";

class App extends Componet{
  render(){
    const name = 'react';
    return <div className="react">{name}</div>
  }
}

*/


/*
function Welcome(props){
  return <h1>Hello, {props.name}</h1>
}

function App() {
  return (
    <div>
      <Welcome name ="Mike" />
      <Welcome name ="Steve" />
      <Welcome name ="Jane" />
    </div>
  )
} */

export default App; 