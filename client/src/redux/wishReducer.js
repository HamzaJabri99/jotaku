import { createSlice } from "@reduxjs/toolkit";
const initialState = { favorites: [] };
const wishSlice = createSlice({
  name: "wish",
  initialState,
  reducers: {
    addToWish: (state, action) => {
      const product = state.favorites.find(
        (item) => item.id === action.payload.id
      );
      if (product) {
        product.quantity += action.payload.quantity;
      } else {
        state.favorites.push(action.payload);
      }
    },
    removeFromWish: (state, action) => {
      state.favorites = state.favorites.filter(
        (item) => item.id !== action.payload.id
      );
    },
    resetWish: (state) => {
      state.favorites = [];
    },
  },
});
export const { addToWish, removeFromWish, resetWish } = wishSlice.actions;
export default wishSlice.reducer;
