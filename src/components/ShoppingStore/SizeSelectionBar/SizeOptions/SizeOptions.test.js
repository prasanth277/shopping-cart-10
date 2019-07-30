import React from "react";
import {
  render,
  cleanup,
  fireEvent,
  getByTestId
} from "@testing-library/react";
import "@testing-library/jest-dom";
import SizeOptions from ".";
import ProductStore from "../.././../../store/ProductStore";
const sizeOfProduct = { label: "XS", value: "XS" };
const productStore = new ProductStore();
afterEach(cleanup);

describe("check size css", () => {
  test("change background color of size", () => {
    const { getByTestId } = render(
      <SizeOptions
        size={sizeOfProduct}
        productStore={productStore}
        key={sizeOfProduct.label}
      />
    );
    const size = getByTestId("size");
    expect(size).toBeDefined();
    fireEvent.click(size);
    const activeSize = getByTestId("activeSize");
    expect(activeSize).toBeDefined();
  });
});
