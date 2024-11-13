import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Library from './chapter01/Library'
import reportWebVitals from './reportWebVitals';
import Clock from './chapter02/Clock';
import ImportComponent from './chapter02/ImportComponent';
import S_Props from './chapter03/S_Props';
import CommentList from './chapter01/CommentList';
import Counter from './chapter01/Count';
import Say from './chapter01/Say';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  
    <App/>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
