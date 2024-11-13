import "./App.css";
import { Button, Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import { createContext, useState } from "react";
import { Provider } from "react-redux";
import data from "./shoes";
import Detail from "./routes/Detail";
import Home from "./routes/Home";
import About from "./routes/About";
import axios from "axios";
import Cart from "./routes/Cart";
import store from "./store";
import React from "react";
import Register from "./components/Register";
import Login from "./components/Login";
import cartReducer from "./store/cartReducer";

export const 보관함 = createContext();

function App() {
  const [shoes, setShoes] = useState(data);
  const [재고] = useState([10, 11, 12]);
  const navigate = useNavigate();

  return (
    <Provider store={store}>
      <div className="App">
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand onClick={() => navigate("/")}>
              H O M E
            </Navbar.Brand>
            <Nav className="me-auto">
              <NavDropdown title="About" id="navbarScrollingDropdown">
                <NavDropdown.Item onClick={() => navigate("/about/member")}>
                  멤 버
                </NavDropdown.Item>
                <NavDropdown.Item onClick={() => navigate("/about/location")}>
                  위 치 정 보
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link onClick={() => navigate("/cart")}>장 바 구 니</Nav.Link>
              <Nav.Link onClick={() => navigate("/login")}>로 그 인</Nav.Link>
             
            </Nav>
          </Container>
        </Navbar>
        

        <Routes>
          <Route path="/" element={<Home shoes={shoes} />} />
          <Route
            path="/detail/:id"
            element={
              <보관함.Provider value={{ 재고, shoes }}>
                
               <Detail shoes={shoes} />
              </보관함.Provider>
            }
          />
          <Route path="/about" element={<About />}>
            <Route path="member" element={<div>멤버정보</div>} />
            <Route path="location" element={<div>위치정보</div>} />
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<div>없는 페이지입니다.</div>} />
          
        </Routes>

        <button
          onClick={() => {
            axios
              .get("https://codingapple1.github.io/shop/data2.json")
              .then((result) => {
                setShoes((prevShoes) => [...prevShoes, ...result.data]);
              })
              .catch(() => {
                console.log("실패함");
              });
          }}
        >
          버튼
        </button>
      </div>
    </Provider>
  );
}

export default App;