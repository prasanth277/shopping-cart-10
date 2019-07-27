import ProductStore from "../store/ProductStore";
const productStore = new ProductStore();

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
  },
  {
    availableSizes: ["X", "L", "XL"],
    currencyFormat: "$",
    currencyId: "USD",
    description: "GPX Poly 1",
    id: 14,
    installments: 3,
    isFreeShipping: true,
    price: 9,
    sku: 10686354557628304,
    style: "Front tie dye print",
    title: "Sphynx Tie Dye Wine T-Shirt",
    image:
      "https://react-shopping-cart-67954.firebaseapp.com/static/media/10686354557628304_1.0d941b4c.jpg"
  }
];
describe("Product List Instances", () => {
  test("No of products in list", () => {
    productStore.getInstances(products);
    expect(productStore.listOfProducts.length).toBe(3);
  });
});
describe("API status", () => {
  test("check API loading", () => {
    productStore.changeAPIStatus("loading");
    expect(productStore.apiStatus).toBe("loading");
  });
  test("check API success", () => {
    productStore.changeAPIStatus("success");
    expect(productStore.apiStatus).toBe("success");
  });
  test("check API failure", () => {
    productStore.changeAPIStatus("failure");
    expect(productStore.apiStatus).toBe("failure");
  });
});

describe("Size filters", () => {
  test("check Size filter list", () => {
    productStore.changeSizeFilter("XL");
    expect(productStore.productSizeFilter).toEqual(
      expect.arrayContaining(["XL"])
    );
  });
  test("check Size filter list", () => {
    productStore.changeSizeFilter("XL");
    expect(productStore.productSizeFilter).toEqual(expect.arrayContaining([]));
  });
});
describe("Products available", () => {
  test("No. of products", () => {
    productStore.countProductsAvailable(5);
    expect(productStore.productsAvailable).toBe(5);
  });
});
describe("Sort filter", () => {
  test("Type of filter HightoLow", () => {
    productStore.changeSortFilter("PriceHightoPriceLow");
    expect(productStore.sortByOptionFilter).toBe("PriceHightoPriceLow");
  });
  test("Type of filter LowtoHigh", () => {
    productStore.changeSortFilter("PriceLowtoPriceHigh");
    expect(productStore.sortByOptionFilter).toBe("PriceLowtoPriceHigh");
  });
});
// describe("Display Products", () => {
//   test("check list of products", () => {
//     productStore.changeSizeFilter("XL");
//     productStore.displayFilteredProducts();
//     expect(productStore.listOfProducts.length).toBe(10);
//   });
// });
