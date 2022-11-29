import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartReducer";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
// const stripe = require("stripe")(
//   "sk_test_51M9XSBGogcCZVVw2tLvHGUo8hsXg0GuvkFTRytXUawZ6Apr48xggTATgZ0btcBRYzHnqnqF7oxijwqzV07cdcq1D00Rr6LPsTD"
// );

const persistConfig = {
  key: "cart",
  version: 1,
  storage,
};

const persistedReducer = persistReducer(persistConfig, cartReducer);

const store = configureStore({
  reducer: { cart: persistedReducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export let persistor = persistStore(store);
export default store;
