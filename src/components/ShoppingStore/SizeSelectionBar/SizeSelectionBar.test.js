import React from "react";
import {
  render,
  cleanup,
  fireEvent,
  getByTestId
} from "@testing-library/react";
import "@testing-library/jest-dom";
import SizeSelectionBar from ".";
import ProductStore from ".././../../store/ProductStore";
const productStore = new ProductStore();
const sizes = [
  { label: "XS", value: "XS" },
  { label: "S", value: "S" },
  { label: "M", value: "M" },
  { label: "ML", value: "ML" },
  { label: "L", value: "L" },
  { label: "XL", value: "XL" },
  { label: "XXL", value: "XXL" }
];
afterEach(cleanup);

describe("Size selection Bar", () => {
  test("TO check number of sizes", () => {
    const { getByTestId } = render(
      <SizeSelectionBar sizes={sizes} productStore={productStore} />
    );
    const selctionBar = getByTestId("selectionBar");
    expect(selctionBar.children).toHaveLength(7);
  });
});
