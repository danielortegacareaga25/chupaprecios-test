import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import { LoginPage } from "./Login";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const mockUsedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockUsedNavigate,
}));

describe("<CatalogPage/>", () => {
  it("CatalogPage should be show loading", () => {
    const initialState = {
      auth: {
        loading: true,
        bearerToken: null,
      },
    };
    const store = mockStore(initialState);

    render(
      <Provider store={store}>
        <LoginPage />
      </Provider>
    );

    const loadingContainer = screen.getByRole("progressbar");
    expect(loadingContainer).toBeInTheDocument();
  });
  it("CatalogPage should call navigate", () => {
    const initialState = {
      auth: {
        loading: true,
        bearerToken: "Token",
      },
    };
    const store = mockStore(initialState);

    render(
      <Provider store={store}>
        <LoginPage />
      </Provider>
    );
    expect(mockUsedNavigate).toHaveBeenCalled();
  });
});
