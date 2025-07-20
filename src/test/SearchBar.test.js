import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import SearchBar from "../components/SearchBar";

describe("SearchBar Component", () => {
  let mockSetSearchText;

  beforeEach(() => {
    mockSetSearchText = jest.fn();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("should render the search input field", () => {
    render(<SearchBar searchText="" setSearchText={mockSetSearchText} />);
    const inputElement = screen.getByPlaceholderText(
      "Search for cakes, cookies, or brownies..."
    );
    expect(inputElement).toBeInTheDocument();
  });

  test("should update input field when user types", () => {
    render(<SearchBar searchText="" setSearchText={mockSetSearchText} />);
    const inputElement = screen.getByPlaceholderText(
      "Search for cakes, cookies, or brownies..."
    );
    fireEvent.change(inputElement, { target: { value: "cake" } });
    expect(mockSetSearchText).toHaveBeenCalledWith("cake");
  });

  test("should call the search function on text input", () => {
    render(<SearchBar searchText="" setSearchText={mockSetSearchText} />);
    const inputElement = screen.getByPlaceholderText(
      "Search for cakes, cookies, or brownies..."
    );
    fireEvent.change(inputElement, { target: { value: "brownie" } });
    expect(mockSetSearchText).toHaveBeenCalledTimes(1);
    expect(mockSetSearchText).toHaveBeenCalledWith("brownie");
  });

  test("should clear input when clear button is clicked", () => {
    render(<SearchBar searchText="cake" setSearchText={mockSetSearchText} />); // Ensuring searchText is non-empty
    const clearButton = screen.getByText("Clear");
    fireEvent.click(clearButton);
    expect(mockSetSearchText).toHaveBeenCalledWith("");
  });

  test("Debug: Check if SearchBar renders properly", () => {
    render(<SearchBar searchText="" setSearchText={() => {}} />);
    screen.debug(); // This prints the component structure in the test output
  });
});
