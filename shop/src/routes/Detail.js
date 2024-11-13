import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Nav } from "react-bootstrap";
import { useDispatch } from 'react-redux';
import { addToCart } from "../store/action"; 
import shoes from "../shoes";

function Detail(props) {
  const { id } = useParams();
  const shoe = props.shoes.filter((shoe) => shoe.id === Number(id));
  const [event, setEvent] = useState(true);
  const [tab, setTab] = useState(0);
  const dispatch = useDispatch(); 
  const handleOrder = (shoe) => {
    console.log("주문하기 클릭됨:", shoe);
    dispatch(addToCart(shoe)); 
    alert(`${shoe.title}가 장바구니에 추가되었습니다.`);
  };

  useEffect(() => {
    const to = setTimeout(() => {
      setEvent(false);
    }, 2000);
    return () => {
      clearTimeout(to);
    };
  }, []);

  if (shoe.length === 0) {
    return (
      <div>
        <h3> 해당 상품은 존재하지 않습니다.</h3>
      </div>
    );
  } else {
    return (
      <>
        {event && <div className="alert alert-warning">2초 이내 구매 시 할인</div>}
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <img
                src={`https://codingapple1.github.io/shop/shoes${id}.jpg`}
                width="100"
              />
            </div>
            <div className="col-md-6">
              <h4 className="pt-5">{shoe[0].title}</h4>
              <p>{shoe[0].content}</p>
              <p>{shoe[0].price}</p>
              <button className="btn btn-danger" onClick={() => handleOrder(shoe[0])}>주문하기</button>
            </div>
            <Nav variant="tabs" defaultActiveKey="link1">
              <Nav.Item>
                <Nav.Link eventKey="link1" onClick={() => setTab(0)}>1</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link2" onClick={() => setTab(1)}>2</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link3" onClick={() => setTab(2)}>3</Nav.Link>
              </Nav.Item>
            </Nav>
          </div>
          <Tab tab={tab} />
        </div>
      </>
    );
  }
}

function Tab({ tab }) {
  const [fade, setFade] = useState("");

  useEffect(() => {
    const to = setTimeout(() => {
      setFade("end");
    }, 100);
    return () => {
      clearTimeout(to);
      setFade("");
    };
  }, [tab]);

  return (
    <div className={`start ${fade}`}>
      {[<div>내용 0</div>, <div>내용 1</div>, <div>내용 2</div>][tab]}
    </div>
  );
}

export default Detail;
