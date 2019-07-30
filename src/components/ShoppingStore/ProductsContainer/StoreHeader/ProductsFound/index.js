import React, { Component } from "react";
import { observer } from "mobx-react";
import { ProductsDisplay } from "./StyledComponent";
@observer
class ProductsFound extends Component {
  render() {
    return (
      <ProductsDisplay data-testid="productsAvailable">
        {this.props.productStore.productsAvailable} Product(s) found.
      </ProductsDisplay>
    );
  }
}
export default ProductsFound;
