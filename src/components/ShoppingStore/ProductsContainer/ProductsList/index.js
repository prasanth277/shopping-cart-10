import React, { Component } from "react";
import Product from "./Product";
import productsList from "../../../../constants/productsList";
import "./style.css";
import { observer } from "mobx-react";
@observer
class ProductsList extends Component {
  displayProducts = () => {
    return this.props.productStore
      .displayFilteredProducts()
      .map(item => <Product product={item} />);
  };
  render() {
    return <div className="productsInStore">{this.displayProducts()}</div>;
  }
}
export default ProductsList;
