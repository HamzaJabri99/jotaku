import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  products: [
    {
      title: "skirt for women",
      price: 3300,
      description: "just a skirt o sf xD",
    },
  ],
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const product = state.products.find(
        (item) => item.id === action.payload.id
      );
      if (product) {
        product.quantity += action.payload.quantity;
        state.products.quantity += 1;
      } else {
        state.products.push(product);
      }
      // state.products.map((item) =>
      //   item.id !== action.payload.id
      //     ? state.products.push(action.payload)
      //     : (item.quantity += action.payload.quantity)
      // );
      //state.products.push();
    },
    removeFromCart: (state, action) => {
      state.products = state.products.filter(
        (item) => item.id !== action.payload.id
      );
    },
    resetCart: (state) => {
      state.products = [];
    },
  },
});
export const { addToCart, removeFromCart, resetCart } = cartSlice.actions;
export default cartSlice.reducer;
