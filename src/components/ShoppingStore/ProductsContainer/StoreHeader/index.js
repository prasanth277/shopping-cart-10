import React, { Component } from "react";
import ProductsFound from "./ProductsFound";
import SortByOption from "./SortByOption";
import "./style.css";

class StoreHeader extends Component {
  render() {
    return (
      <div className="storeHeader">
        <ProductsFound productStore={this.props.productStore} />
        <SortByOption
          sortByOptions={this.props.sortByOptions}
          productStore={this.props.productStore}
        />
      </div>
    );
  }
}
export default StoreHeader;
