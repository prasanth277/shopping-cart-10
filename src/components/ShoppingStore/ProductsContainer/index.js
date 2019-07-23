import React, { Component } from "react";
import StoreHeader from "./StoreHeader";
import "./style.css";
import sortByOptions from "../../../constants/filters/sortByOptions";
import ProductsList from "./ProductsList";
export default class ProductsContainer extends Component {
  render() {
    return (
      <div className="productsConatiner">
        <StoreHeader
          sortByOptions={sortByOptions}
          productStore={this.props.productStore}
        />
        <ProductsList productStore={this.props.productStore} />
      </div>
    );
  }
}
