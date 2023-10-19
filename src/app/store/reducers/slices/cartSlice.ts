import { CaseReducer, PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Favorite } from "../../../interfaces/favorite.interface";

type Cartitem = Favorite & { counter: number };

type TypeInitialState = {
  items: Cartitem[];
};

const initialState: TypeInitialState = {
  items: [],
};

const addCartCase: CaseReducer<TypeInitialState, PayloadAction<Favorite>> = (
  state,
  { payload }
) => {
  const itemExisted = state.items.find((item) => item.asin === payload.asin);
  if (itemExisted) {
    itemExisted.counter += 1;
  } else {
    state.items.push({
      ...payload,
      counter: 1,
    });
  }
};

const deleteCartCase: CaseReducer<TypeInitialState, PayloadAction<string>> = (
  state,
  { payload }
) => {
  state.items = state.items.filter((item) => item.asin !== payload);
};

/**
 * Reducer to cart  store
 */
const cartSlice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {
    addCart: addCartCase,
    deleteCart: deleteCartCase,
  },
});

export const { addCart, deleteCart } = cartSlice.actions;

export const cartReducer = cartSlice.reducer;
