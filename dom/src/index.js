import { render } from "react-dom";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import App from "./App";
import Expenses from "./components/Expenses";
import Invoices from "./components/invoices"
import React from 'react';
import ReactDOM from "react-dom";
import './index.css';
import reportWebVitals from './reportWebVitals';

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<App />} />
    <Route path="expenses" element={<Expenses />} />
    <Route path="invoices" element={<Invoices />} />
  </Routes>
  </BrowserRouter>,
  rootElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

