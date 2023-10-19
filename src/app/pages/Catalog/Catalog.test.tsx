import React from "react";
import { cleanup, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { CatalogPage } from "./Catalog";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("<CatalogPage/>", () => {
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

  it("Catalog page render correctly loading element", () => {
    const initialState = {
      catalog: {
        data: [],
        loading: true,
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
    const loadingContainer = screen.getByRole("progressbar");
    expect(loadingContainer).toBeInTheDocument();
  });
});
