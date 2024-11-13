import { configureStore, createSlice } from "@reduxjs/toolkit";

const user = createSlice({
  name: "user",
  initialState: { name: "kim", age: 21 },
});

const cart = createSlice({
  name: "cart",
  initialState: [
    { id: 0, name: "White and Black", count: 2 },
    { id: 2, name: "Grey Yordan", count: 1 },
  ],
  reducers: {
    addToCart(state, action) {
      const existingItem = state.find((product) => product.id === action.payload.id);
      if (existingItem) {
        existingItem.count += 1;
      } else {
        state.push({ ...action.payload, count: 1 });
      }
    },
    changeCount(state, action) {
      const i = state.findIndex((product) => product.id === action.payload);
      state[i].count += 1;
    },
    decrease(state, action) {
        const i = state.findIndex((product) => product.id === action.payload);
        state[i].count -= 1;
  },
}});

export const { changeCount, decrease, addToCart } = cart.actions;

export default configureStore({
  reducer: {
    user: user.reducer,
    cart: cart.reducer,
  },
});