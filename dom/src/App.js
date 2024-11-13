import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./components/home";
import Invoices from "./components/invoices";

function App() {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="invoices" element={<Invoices />} />
        </Routes>
        </BrowserRouter>
    );
}

export default App;