import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import axios from "axios";
import ProductList from "../components/ProductList";

jest.mock("axios"); // Mock Axios

const mockProducts = [
  { id: 1, name: "Chocolate Cake", category: "cakes", price: "$10", image: "chocolate-cake.jpg" },
  { id: 2, name: "Butter Cookies", category: "cookies", price: "$5", image: "butter-cookies.jpg" },
];

describe("ProductList Component", () => {
  beforeEach(() => {
    axios.get.mockResolvedValue({ data: mockProducts }); // Mock API response
  });

  afterEach(() => {
    jest.clearAllMocks(); // Clear mocks after each test
  });

  test("should fetch and display products", async () => {
    render(<ProductList />);
    
    await waitFor(() => {
      expect(screen.getByText("Chocolate Cake")).toBeInTheDocument();
      expect(screen.getByText("Butter Cookies")).toBeInTheDocument();
    });
  });

  test("should filter products based on search input", async () => {
    render(<ProductList />);
    
    await waitFor(() => screen.getByText("Chocolate Cake"));

    const searchInput = screen.getByPlaceholderText("Search products...");
    fireEvent.change(searchInput, { target: { value: "Chocolate" } });

    expect(screen.getByText("Chocolate Cake")).toBeInTheDocument();
    expect(screen.queryByText("Butter Cookies")).not.toBeInTheDocument();
  });

  test("should show 'No products found!' when no match", async () => {
    render(<ProductList />);
    
    await waitFor(() => screen.getByText("Chocolate Cake"));

    const searchInput = screen.getByPlaceholderText("Search products...");
    fireEvent.change(searchInput, { target: { value: "Vanilla" } });

    expect(screen.getByText("No products found!")).toBeInTheDocument();
  });

  test("should handle API errors gracefully", async () => {
    axios.get.mockRejectedValue(new Error("API Error"));

    render(<ProductList />);

    await waitFor(() => {
      expect(screen.getByText("Failed to load products. Please try again!")).toBeInTheDocument();
    });
  });
});
