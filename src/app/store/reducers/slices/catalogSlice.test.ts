import { getCatalog } from "../thunks/catalogThunk";
import { catalogReducer } from "./catalogSlice";

describe("catalogReducer", () => {
  it("Should handle getCatalog.pending", () => {
    const initialState = {
      data: [],
      loading: false,
      error: null,
    };

    const action = getCatalog.pending;

    const nextState = catalogReducer(initialState, action);

    expect(nextState.loading).toBe(true);
    expect(nextState.error).toBe(null);
    expect(nextState.data).toHaveLength(0);
  });

  it("Should handle getCatalog.fulfilled", () => {
    const initialState = {
      data: [],
      loading: true,
      error: null,
    };

    const responseData = { data: { items: [{ id: 1, name: "Product 1" }] } };

    const action = { type: getCatalog.fulfilled.type, payload: responseData };
    const nextState = catalogReducer(initialState, action);

    expect(nextState.loading).toBe(false);
    expect(nextState.error).toBe(null);
    expect(nextState.data).toEqual(responseData.data.items);
  });

  it("Should handle getCatalog.rejected", () => {
    const initialState = {
      data: [],
      loading: true,
      error: null,
    };

    const errorMessage = "An error occurred";
    const action = {
      type: getCatalog.rejected.type,
      error: { message: errorMessage },
    };
    const nextState = catalogReducer(initialState, action);

    expect(nextState.loading).toBe(false);
    expect(nextState.error).toBe(errorMessage);
    expect(nextState.data).toHaveLength(0);
  });
});
