import React, { Component } from "react";
import SizeSelectionBar from "./SizeSelectionBar";
import ProductsContainer from "./ProductsContainer";
import sizes from "../../constants/sizes";
import "./style.css";
export default class ShoppingCart extends Component {
  render() {
    return (
      <div className="viewComponents">
        <SizeSelectionBar sizes={sizes} />
        <ProductsContainer />
      </div>
    );
  }
}
