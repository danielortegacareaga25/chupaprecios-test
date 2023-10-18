import { cartReducer, addCart, deleteCart } from "./cartSlice";

describe("cartReducer", () => {
  it("Should add an item to the cart", () => {
    const initialState = {
      items: [],
    };

    const action = addCart({
      asin: "ASIN123",
      title: "Product 1",
      thumbnail: "product.jpg",
    });
    const nextState = cartReducer(initialState, action);

    expect(nextState.items).toHaveLength(1);
    expect(nextState.items[0].asin).toBe("ASIN123");
    expect(nextState.items[0].counter).toBe(1);
  });

  it("Should increment the counter when adding an existing item to the cart", () => {
    const initialState = {
      items: [
        {
          asin: "ASIN123",
          title: "Product 1",
          thumbnail: "product.jpg",
          counter: 1,
        },
      ],
    };
    const action = addCart({
      asin: "ASIN123",
      title: "Product 1",
      thumbnail: "product.jpg",
    });

    const nextState = cartReducer(initialState, action);

    expect(nextState.items).toHaveLength(1);
    expect(nextState.items[0].asin).toBe("ASIN123");
    expect(nextState.items[0].counter).toBe(2);
  });

  it("Should delete an item from the cart", () => {
    const initialState = {
      items: [
        {
          asin: "ASIN123",
          title: "Product 1",
          thumbnail: "product.jpg",
          counter: 1,
        },
      ],
    };
    const action = deleteCart("ASIN123");
    const nextState = cartReducer(initialState, action);

    expect(nextState.items).toHaveLength(0);
  });
});
