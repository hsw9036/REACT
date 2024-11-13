import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [
    { id: 0, name: "White and Black", count: 2 },
    { id: 2, name: "Grey Yordan", count: 1 },
  ],
  reducers: {
    addToCart(state, action) {
      console.log("addToCart", state);
      const item = action.payload;
      const existingItem = state.find(product => product.id === item.id);
      if (existingItem) {
        existingItem.count += 1; // 수량 증가
      } else {
        state.push({ id: item.id, name: item.name, count: 1 }); // 새로운 상품 추가
      }
    },
    removeFromCart(state, action) {
      console.log("removeFromCart", state);
      return state.filter(product => product.id !== action.payload);
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
