import React from "react";
import {
  render,
  cleanup,
  fireEvent,
  getByTestId
} from "@testing-library/react";
import "@testing-library/jest-dom";
import ProductStore from "../../../../../store/ProductStore";
import SortByOption from ".";
const productStore = new ProductStore();

const sortByOptions = [
  { label: "Highest to lowest", value: "PriceHightoPriceLow" },
  { label: "Lowest to highest", value: "PriceLowtoPriceHigh" }
];
const products = [
  {
    availableSizes: ["S", "XS"],
    currencyFormat: "$",
    currencyId: "USD",
    description: "4 MSL",
    id: 12,
    installments: 9,
    isFreeShipping: true,
    price: 10.9,
    sku: 12064273040195392,
    style: "Black with custom print",
    title: "Cat Tee Black T-Shirt",
    image:
      "https://react-shopping-cart-67954.firebaseapp.com/static/media/12064273040195392_1.2995d79a.jpg"
  },
  {
    availableSizes: ["M"],
    currencyFormat: "$",
    currencyId: "USD",
    description: "",
    id: 13,
    installments: 5,
    isFreeShipping: true,
    price: 29.45,
    sku: 51498472915966370,
    style: "Front print and paisley print",
    title: "Dark Thug Blue-Navy T-Shirt",
    image:
      "https://react-shopping-cart-67954.firebaseapp.com/static/media/51498472915966370_1.df947f14.jpg"
  }
];
afterEach(cleanup);

describe("SortByOption", () => {
  test("Calling function while changing the option", () => {
    const { getByTestId } = render(
      <SortByOption sortByOptions={sortByOptions} productStore={productStore} />
    );
    const options = getByTestId("options");
    const spy = jest.spyOn(productStore, "changeSortFilter");
    fireEvent.change(options);
    expect(spy).toHaveBeenCalled();
  });

  test("Check whether listofproducts is sorted or not", () => {
    const { getByTestId } = render(
      <SortByOption sortByOptions={sortByOptions} productStore={productStore} />
    );
    const options = getByTestId("options");
    fireEvent.change(options, { target: { value: "PriceHightoPriceLow" } });
    expect(productStore.filterBySortProducts(products)[0].price).toBe(29.45);
  });
});
