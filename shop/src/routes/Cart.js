
import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { changeCount, decrease } from "../store";
// import { deleteItem, removeFromCart } from "../store/cartSlice";
import { removeFromCart } from "../store/cartSlice";

function Cart() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <div>
      <h5>{state.user.name}님의 장바구니</h5>
      <Table responsive="md">
        <thead>
          <tr>
            <th>#</th>
            <th>상품명</th>
            <th>수량</th>
            <th>변경하기</th>
            <th>삭제하기</th> {/* 삭제 버튼 추가 */}
          </tr>
        </thead>
        <tbody>
          {state.cart.map((item, index) => {
            return (
              <tr key={index}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.count}</td>
                <td>
                  <button onClick={() => dispatch(decrease(item.id))}>-</button>
                  <button onClick={() => dispatch(changeCount(item.id))}>+</button>
                </td>
                <td>
                  <button onClick={() => { console.log(item.id); dispatch(removeFromCart(item.id))}}>삭제</button> {/* 삭제 버튼 */}
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}

export default Cart;