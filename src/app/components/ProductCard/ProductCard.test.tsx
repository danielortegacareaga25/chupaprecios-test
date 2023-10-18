import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import { ProductCard } from "./ProductCard";

describe("<ProductCard/>", () => {
  const mockProps = {
    title: "Ball for dogs",
    thumbnail: "ball.jpg",
    handledClick: jest.fn(),
    asin: "ASIN123",
  };

  afterEach(cleanup);

  it("Product card is rendering correctly the props", () => {
    render(<ProductCard {...mockProps} />);

    const titleElement = screen.getByText(mockProps.title);
    const imageElement = screen.getByAltText(mockProps.title);
    const addButton = screen.getByText("Agregar");

    expect(titleElement).toBeInTheDocument();
    expect(imageElement).toBeInTheDocument();
    expect(addButton).toBeInTheDocument();
  });

  it("Product is calling handledClick when the 'Agregar' button is clicked", () => {
    render(<ProductCard {...mockProps} />);
    const addButton = screen.getByText("Agregar");

    fireEvent.click(addButton);
    expect(mockProps.handledClick).toHaveBeenCalled();
  });
});
