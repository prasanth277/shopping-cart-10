import React, { Component } from "react";
import Product from "./Product";
import productsList from "../../../../constants/productsList";
import "./style.css";
export default class ProductsList extends Component {
  displayProducts = () => {
    return this.props.productStore.listOfProducts.map(item => (
      <Product product={item} />
    ));
  };
  render() {
    return <div className="productsInStore">{this.displayProducts()}</div>;
  }
}
