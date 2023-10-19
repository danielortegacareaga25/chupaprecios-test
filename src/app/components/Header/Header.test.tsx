import { cleanup, render, screen } from "@testing-library/react";
import { Header } from "./Header";

describe("<Header/>", () => {
  afterEach(cleanup);

  it("Header show the correct number", () => {
    const counter = 5;
    render(<Header counter={counter} />);

    const badge = screen.getByText(counter.toString());
    expect(badge).toBeInTheDocument();
  });
});
