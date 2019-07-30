import React from "react";
import {
  render,
  cleanup,
  fireEvent,
  getByTestId
} from "@testing-library/react";
import "@testing-library/jest-dom";
import ProductStore from "../../../../../store/ProductStore";
import ProductsFound from ".";
const productStore = new ProductStore();
afterEach(cleanup);

describe("Products found", () => {
  test("Checking the value of products available", async () => {
    const { getByTestId } = await render(
      <ProductsFound productStore={productStore} />
    );
    const productsAvailable = getByTestId("productsAvailable");
    expect(productsAvailable.textContent).toEqual(0 + " Product(s) found.");
  });
});
