import React, { Component } from "react";
import StoreHeader from "./StoreHeader";
import "./style.css";
import sortByOptions from "../../../constants/sortByOptions";
import ProductsList from "./ProductsList";
export default class ProductsContainer extends Component {
  render() {
    return (
      <div className="productsConatiner">
        <StoreHeader sortByOptions={sortByOptions} />
        <ProductsList />
      </div>
    );
  }
}
