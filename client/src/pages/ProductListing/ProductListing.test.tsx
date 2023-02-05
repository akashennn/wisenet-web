import React from "react";
import { render } from "@testing-library/react";
import ProductListing from "./ProductListing";

test("renders the ProductList", () => {
  const { getByText } = render(<ProductListing />);
  const linkElement = getByText(/Wisenet/i);
  expect(linkElement).toBeInTheDocument();
});
