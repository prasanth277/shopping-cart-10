import React, { Component } from "react";
import { observer } from "mobx-react";
@observer
class ProductsFound extends Component {
  render() {
    return (
      <div>{this.props.productStore.productsAvailable} Product(s) found.</div>
    );
  }
}
export default ProductsFound;
