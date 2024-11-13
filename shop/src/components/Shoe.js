import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addToCart } from '../store/action';

function Shoe(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
    navigate("/cart"); // 장바구니로 이동
  };

  return (
    <div className="container">
      <div className="row">
        {props.shoes.map((item, index) => {
          const i = index + 1;
          return (
            <div className="col-md-4" key={index}>
              <img 
                src={`https://codingapple1.github.io/shop/shoes${i}.jpg`} 
                width="80%" 
                onClick={() => handleAddToCart(item)} 
                style={{ cursor: 'pointer' }} 
              />
              <h4>{item.title}</h4>
              <p>{item.content}</p>
              <p>{item.price}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Shoe;
