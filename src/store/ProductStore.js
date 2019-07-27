import { observable } from "mobx";
import { action } from "mobx";
import ProductItem from "../model/ProductItem";
import CartStore from "./CartStore";
import apiStatus from "../constants/networkConstants/apiStatus";
import sortByOptions from "../constants/filters/sortByOptions";
import * as Cookies from "js-cookie";

class ProductStore {
  @observable listOfProducts = [];
  @observable productSizeFilter = [];
  @observable sortByOptionFilter = "";
  @observable productsAvailable = 0;
  @observable apiStatus = apiStatus.loading;
  cartStore = new CartStore();

  getInstances(products) {
    this.listOfProducts = products.map(
      productItem => new ProductItem(this, productItem)
    );
  }
  fetchProducts() {
    const options = {
      method: "POST",
      headers: {
        authorization: Cookies.get("loginUser"),
        "Content-Type": "application/json"
      }
    };
    fetch("https://user-shopping-cart.getsandbox.com/products/v1/", options)
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          return Promise.reject({
            status: response.status,
            statusText: response.statusText
          });
        }
      })
      .then(response => {
        this.changeAPIStatus(apiStatus.success);
        this.getInstances(response.products);
      })
      .catch(err => {
        console.log("error");
        this.changeAPIStatus(apiStatus.failure);
      });
  }
  changeAPIStatus(val) {
    this.apiStatus = val;
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
  }
  displayFilteredProducts = () => {
    const filteredProducts = [];

    if (this.productSizeFilter.length === 0) {
      this.countProductsAvailable(this.listOfProducts.length);

      return this.filterBySortProducts(this.listOfProducts);
    } else {
      this.listOfProducts.forEach(element => {
        const length = element.availableSizes.filter(function(n) {
          return this.has(n);
        }, new Set(this.productSizeFilter)).length;

        if (length !== 0) {
          if (filteredProducts.indexOf(element) === -1) {
            filteredProducts.push(element);
          }
        }
      });
      this.countProductsAvailable(filteredProducts.length);
      return this.filterBySortProducts(filteredProducts);
    }
  };
  filterBySortProducts(listOfItems) {
    const filteredProductsBySort = listOfItems.slice(0);
    if (this.sortByOptionFilter === sortByOptions[1].value) {
      filteredProductsBySort.sort(function(a, b) {
        return a.price - b.price;
      });
    } else if (this.sortByOptionFilter === sortByOptions[0].value) {
      filteredProductsBySort.sort(function(a, b) {
        return b.price - a.price;
      });
    } else {
    }
    return filteredProductsBySort;
  }
  clearCookie() {
    Cookies.remove("loginUser");
  }
}

export default ProductStore;
