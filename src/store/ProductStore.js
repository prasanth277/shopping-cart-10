import { observable } from "mobx";

import ProductItem from "../model/ProductItem";
class ProductStore {
  listOfProducts = [];
  @observable productSizeFilter = "";
  @observable sortByOptionFilter = "";

  constructor(products) {
    this.listOfProducts = products.map(
      productItem => new ProductItem(productItem)
    );
  }
}
export default ProductStore;
