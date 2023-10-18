import React from "react";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { CatalogPage } from "./Catalog";
import { addCart } from "../../store/reducers/slices/cartSlice";

const mockStore = configureStore([]);

describe("CatalogPage", () => {
  afterEach(cleanup);
  it("Catalog page render correctly data and header element", () => {
    const initialState = {
      catalog: {
        data: [
          {
            title: "Product 1",
            thumbnail: "product1.jpg",
            asin: "ASIN123",
          },
          {
            title: "Product 2",
            thumbnail: "product2.jpg",
            asin: "ASIN456",
          },
        ],
      },
      cart: {
        items: [],
      },
    };
    const store = mockStore(initialState);

    render(
      <Provider store={store}>
        <CatalogPage />
      </Provider>
    );

    const headerElement = screen.getByTestId("header");
    const imageOne = screen.getByAltText(initialState.catalog.data[0].title);
    const imageTwo = screen.getByAltText(initialState.catalog.data[1].title);

    expect(headerElement).toBeInTheDocument();
    expect(imageOne).toBeDefined();
    expect(imageTwo).toBeDefined();
  });

  it("Catalog handles the 'Agregar' button click calls add action in Store", () => {
    const initialState = {
      catalog: {
        data: [
          {
            title: "Product 1",
            thumbnail: "product1.jpg",
            asin: "ASIN123",
          },
        ],
      },
      cart: {
        items: [],
      },
    };
    const store = mockStore(initialState);

    render(
      <Provider store={store}>
        <CatalogPage />
      </Provider>
    );

    const addButton = screen.getByText("Agregar");

    fireEvent.click(addButton);

    const actions = store.getActions();
    expect(actions).toEqual([
      { type: addCart.toString(), payload: initialState.catalog.data[0] },
    ]);
  });
});
