import { getToken } from "../thunks/authThunk";
import { authReducer } from "./authSlice";

describe("authReducer", () => {
  it("handles getToken.pending", () => {
    const initialState = {
      bearerToken: null,
      loading: false,
      error: null,
    };

    const nextState = authReducer(initialState, getToken.pending);

    expect(nextState.loading).toBe(true);
    expect(nextState.error).toBe(null);
    expect(nextState.bearerToken).toBe(null);
  });

  it("Should fires getToken.fulfilled", () => {
    const initialState = {
      bearerToken: null,
      loading: true,
      error: null,
    };

    const payload = "9869248579483759834-423423432";
    const action = { type: getToken.fulfilled.type, payload };
    const nextState = authReducer(initialState, action);

    expect(nextState.loading).toBe(false);
    expect(nextState.error).toBe(null);
    expect(nextState.bearerToken).toBe(payload);
  });

  it("Should fires getToken.rejected", () => {
    const initialState = {
      bearerToken: "previousToken",
      loading: true,
      error: null,
    };

    const errorMessage = "An error occurred";
    const action = {
      type: getToken.rejected.type,
      error: { message: errorMessage },
    };
    const nextState = authReducer(initialState, action);

    expect(nextState.loading).toBe(false);
    expect(nextState.error).toBe(errorMessage);
    expect(nextState.bearerToken).toBe("previousToken");
  });

  it("Should fires an unknown action", () => {
    const initialState = {
      bearerToken: "previousToken",
      loading: true,
      error: null,
    };
    const action = { type: "UNKNOWN_ACTION" };
    const nextState = authReducer(initialState, action);

    expect(nextState).toEqual(initialState);
  });
});
