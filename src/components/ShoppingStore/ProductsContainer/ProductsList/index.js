import React, { Component } from "react";
import Product from "./Product";
import productsList from "../../../../constants/productsList";
import { ProductsInStore } from "./StyledComponent.js";
import { observer } from "mobx-react";
@observer
class ProductsList extends Component {
  displayProducts = () => {
    return this.props.productStore
      .displayFilteredProducts()
      .map(item => <Product product={item} key={item.id} />);
  };
  render() {
    return <ProductsInStore>{this.displayProducts()}</ProductsInStore>;
  }
}
export default ProductsList;
