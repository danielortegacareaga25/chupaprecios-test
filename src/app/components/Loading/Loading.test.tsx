import { cleanup, render, screen } from "@testing-library/react";
import { Loading } from "./Loading";

describe("<Loading/>", () => {
  afterEach(cleanup);

  it("Should be render the progressbar", () => {
    render(<Loading />);
    const loadingContainer = screen.getByRole("progressbar");

    expect(loadingContainer).toBeInTheDocument();
  });
});
