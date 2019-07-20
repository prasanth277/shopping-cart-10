import { observable } from "mobx";
import { computed } from "mobx";
import { action } from "mobx";
import ProductItem from "../model/ProductItem";
class ProductStore {
  listOfProducts = [];
  @observable productSizeFilter = [];
  @observable sortByOptionFilter = "";
  @observable productsAvailable = 0;

  constructor(products) {
    this.listOfProducts = products.map(
      productItem => new ProductItem(productItem)
    );
  }
  @action changeSizeFilter(filter) {
    const index = this.productSizeFilter.indexOf(filter);

    if (index > -1) {
      this.productSizeFilter.splice(index, 1);
    } else {
      this.productSizeFilter.push(filter);
    }
  }
  @action countProductsAvailable(length) {
    this.productsAvailable = length;
  }
  @action changeSortFilter(sortType) {
    this.sortByOptionFilter = sortType;
    console.log(this.sortByOptionFilter);
  }
  displayFilteredProducts = () => {
    const filteredProducts = [];

    if (this.productSizeFilter.length == 0) {
      this.countProductsAvailable(this.listOfProducts.length);

      return this.filterBySortProducts(this.listOfProducts);
    } else {
      this.listOfProducts.forEach(element => {
        for (let i = 0; i < this.productSizeFilter.length; i++) {
          if (element.availableSizes.indexOf(this.productSizeFilter[i]) != -1) {
            if (filteredProducts.indexOf(element) === -1) {
              filteredProducts.push(element);
            }
          }
        }
      });
      this.countProductsAvailable(filteredProducts.length);
      return this.filterBySortProducts(filteredProducts);
    }
  };
  filterBySortProducts(listOfItems) {
    const filteredProductsBySort = listOfItems.slice(0);
    if (this.sortByOptionFilter === "LtoH") {
      filteredProductsBySort.sort(function(a, b) {
        return a.price - b.price;
      });
    } else if (this.sortByOptionFilter === "HtoL") {
      filteredProductsBySort.sort(function(a, b) {
        return b.price - a.price;
      });
    } else {
    }
    return filteredProductsBySort;
  }
}

export default ProductStore;
