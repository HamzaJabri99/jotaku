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
import wishReducer from "./wishReducer";

const persistConfig = {
  key: "cart",
  version: 1,
  storage,
};
const persistWishConfig = {
  key: "wish",
  version: 1,
  storage,
};
const persistedReducer = persistReducer(persistConfig, cartReducer);
const persistedWishReducer = persistReducer(persistWishConfig, wishReducer);
const store = configureStore({
  reducer: { cart: persistedReducer, wish: persistedWishReducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export let persistor = persistStore(store);
export default store;
