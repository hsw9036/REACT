import { useDispatch } from "react-redux";
import { ADD_TO_CART } from "../store/action"; // 액션 타입 임포트
import Shoe from "../components/Shoe";

function Home(props) {
  const dispatch = useDispatch();

  const addToCart = (shoe) => {
    dispatch({ type: ADD_TO_CART, payload: shoe });
  };

  return (
    <>
      <div className="main-bg"></div>
      <div className="content">
        <Shoe shoes={props.shoes} addToCart={addToCart} />
      </div>
    </>
  );
}

export default Home;
