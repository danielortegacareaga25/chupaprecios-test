import React from "react";
import { render, screen } from "@testing-library/react";
import { LoginPage } from "./Login";

describe("LoginPage", () => {
  it("renders the LoginPage component", () => {
    render(<LoginPage />);

    const divElement = screen.getByTestId("login");
    expect(divElement).toBeInTheDocument();
  });
});
