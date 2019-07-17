import React, { Component } from "react";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";
import { observer } from "mobx-react";
import { observable } from "mobx";
import { action } from "mobx";
@observer
class FilterProductTable extends Component {
  @observable filterText: "";
  @observable isStockOnly: false;

  @action handleChange = e => {
    this.filterText = e.target.value;
  };
  @action handleCheck = e => {
    this.isStockOnly = !this.isStockOnly;
  };
  render() {
    const products = [
      {
        category: "Sporting Goods",
        price: "$49.99",
        stocked: true,
        name: "Football"
      },
      {
        category: "Sporting Goods",
        price: "$9.99",
        stocked: true,
        name: "Baseball"
      },
      {
        category: "Sporting Goods",
        price: "$29.99",
        stocked: false,
        name: "Basketball"
      },
      {
        category: "Electronics",
        price: "$99.99",
        stocked: true,
        name: "iPod Touch"
      },
      {
        category: "Electronics",
        price: "$399.99",
        stocked: false,
        name: "iPhone 5"
      },
      {
        category: "Electronics",
        price: "$199.99",
        stocked: true,
        name: "Nexus 7"
      }
    ];
    return (
      <>
        <SearchBar
          handlerFromChildText={this.handleChange}
          handlerFromChildCheck={this.handleCheck}
        />
        <ProductTable
          products={products}
          filterText={this.filterText}
          isStockOnly={this.isStockOnly}
        />
      </>
    );
  }
}
export default FilterProductTable;
