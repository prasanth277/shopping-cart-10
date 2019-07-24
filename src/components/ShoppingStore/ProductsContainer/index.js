import React, { Component } from "react";
import StoreHeader from "./StoreHeader";
import { ProductsMainConatiner } from "./StyledComponent.js";
import sortByOptions from "../../../constants/filters/sortByOptions";
import ProductsList from "./ProductsList";
export default class ProductsContainer extends Component {
  render() {
    return (
      <ProductsMainConatiner>
        <StoreHeader
          sortByOptions={sortByOptions}
          productStore={this.props.productStore}
        />
        <ProductsList productStore={this.props.productStore} />
      </ProductsMainConatiner>
    );
  }
}
