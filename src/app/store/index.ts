import { configureStore } from "@reduxjs/toolkit";
import { axiosMiddleware } from "../api";
import { authReducer } from "./reducers/slices/authSlice";
import { catalogReducer } from "./reducers/slices/catalogSlice";
import { cartReducer } from "./reducers/slices/cartSlice";

/**
 * Store of aplication with the reducers and middlewares
 */
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

/**
 * Method to initialized store when is neccesary
 * @returns store
 */
export const initializeStore = () => store;
/**
 * Type of state global
 */
export type RootState = ReturnType<typeof store.getState>;
/**
 * type of dispatch actions
 */
export type AppDispatch = typeof store.dispatch;
