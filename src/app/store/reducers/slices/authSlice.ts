import { createSlice } from "@reduxjs/toolkit";
import { getToken } from "../thunks/authThunk";

type TypeInitialState = {
  bearerToken: string | null;
  loading: boolean;
  error: string | null;
};

const initialState: TypeInitialState = {
  bearerToken: null,
  loading: false,
  error: null,
};

/**
 * Reducer to manage auth store
 */
const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getToken.pending, (state) => {
      state.error = null;
      state.bearerToken = null;
      state.loading = true;
    });
    builder.addCase(getToken.fulfilled, (state, action) => {
      state.bearerToken = action.payload;
      state.loading = false;
    });
    builder.addCase(getToken.rejected, (state, action) => {
      state.error = action?.error.message || "An unexpected error happened";
      state.loading = false;
    });
  },
});

export const {} = authSlice.actions;

export const authReducer = authSlice.reducer;
