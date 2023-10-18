import { createSlice } from "@reduxjs/toolkit";
import { Product } from "../../../interfaces/catalog.interface";
import { dataMock } from "../../../data";
import { getCatalog } from "../thunks/catalogThunk";

type TypeInitialState = {
  data: Product[];
  loading: boolean;
  error: string | null;
};

const initialState: TypeInitialState = {
  data: dataMock[0].data.items,
  loading: false,
  error: null,
};

const catalogSlice = createSlice({
  name: "catalogSlice",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getCatalog.pending, (state) => {
      state.error = null;
      state.data = [];
      state.loading = true;
    });
    builder.addCase(getCatalog.fulfilled, (state, action) => {
      state.data = action.payload.data.items;
      state.loading = false;
    });
    builder.addCase(getCatalog.rejected, (state, action) => {
      state.error = action?.error.message || "An unexpected error happened";
      state.loading = false;
    });
  },
});

export const {} = catalogSlice.actions;

export const catalogReducer = catalogSlice.reducer;
