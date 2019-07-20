import React, { Component } from "react";
import SizeSelectionBar from "./SizeSelectionBar";
import ProductsContainer from "./ProductsContainer";
import ShoppingCart from "./ShoppingCart";
import sizes from "../../constants/sizes";
import "./style.css";
export default class ShoppingStore extends Component {
  render() {
    return (
      <div className="viewComponents">
        <SizeSelectionBar
          sizes={sizes}
          productStore={this.props.productStore}
        />
        <ProductsContainer productStore={this.props.productStore} />
        <ShoppingCart />
      </div>
    );
  }
}
