import React, { Component } from "react";
import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";
import { observer } from "mobx-react";
import { observable, computed } from "mobx";
import { action } from "mobx";

@observer
class FilterProductTable extends Component {
  @observable filterText: string = "";
  @observable isStockOnly: boolean = false;

  @action handleChange = e => {
    this.filterText = e.target.value;
  };
  @action handleCheck = e => {
    this.isStockOnly = !this.isStockOnly;
  };

  @computed get checkProducts() {
    const filteredProducts = [];

    this.props.products.forEach(element => {
      if (element.name.indexOf(this.filterText) !== -1) {
        if (this.isStockOnly === true) {
          if (element.stocked === true) {
            filteredProducts.push(element);
          }
        } else {
          filteredProducts.push(element);
        }
        console.log(element);
      }
    });

    return filteredProducts;
  }

  render() {
    return (
      <>
        <SearchBar
          handlerFromChildText={this.handleChange}
          handlerFromChildCheck={this.handleCheck}
        />
        <ProductTable
          products={this.props.products}
          filteredProducts={this.checkProducts}
        />
      </>
    );
  }
}
export default FilterProductTable;
