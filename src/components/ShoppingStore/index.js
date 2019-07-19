import React, { Component } from "react";
import SizeSelectionBar from "./SizeSelectionBar";
import ProductsContainer from "./ProductsContainer";
import "./style.css";
export default class ShoppingCart extends Component {
  render() {
    return (
      <div className="viewComponents">
        <SizeSelectionBar />
        <ProductsContainer />
      </div>
    );
  }
}
