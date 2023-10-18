import { configureStore } from "@reduxjs/toolkit";
import { axiosMiddleware } from "../api";
import { authReducer } from "./reducers/slices/authSlice";
import { catalogReducer } from "./reducers/slices/catalogSlice";
import { cartReducer } from "./reducers/slices/cartSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    catalog: catalogReducer,
    cart: cartReducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(axiosMiddleware);
  },
});

export const initializeStore = () => store;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
