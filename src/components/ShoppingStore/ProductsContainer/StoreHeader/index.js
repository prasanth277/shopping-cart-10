import React, { Component } from "react";
import ProductsFound from "./ProductsFound";
import SortByOption from "./SortByOption";
import "./style.css";
export default class StoreHeader extends Component {
  render() {
    return (
      <div className="storeHeader">
        <ProductsFound />
        <SortByOption sortByOptions={this.props.sortByOptions} />
      </div>
    );
  }
}
