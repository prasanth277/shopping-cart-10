import React, { Component } from "react";
import SizeSelectionBar from "./SizeSelectionBar";
import ProductsContainer from "./ProductsContainer";
import ShoppingCart from "./ShoppingCart";
import sizes from "../../constants/filters/sizes";
import Loader from "./Loader";
import "./style.css";
import APIFailed from "./APIFailed";
import apiStatus from "../../constants/networkConstants/apiStatus";
import { observer } from "mobx-react";
@observer
class ShoppingStore extends Component {
  componentDidMount() {
    this.props.productStore.fetchProducts();
  }
  displayProductStore = () => {
    if (this.props.productStore.apiStatus === apiStatus.loading) {
      return <Loader />;
    } else if (this.props.productStore.apiStatus === apiStatus.success) {
      return <ProductsContainer productStore={this.props.productStore} />;
    } else {
      return <APIFailed />;
    }
  };
  render() {
    return (
      <div className="viewComponents">
        <SizeSelectionBar
          sizes={sizes}
          productStore={this.props.productStore}
        />
        {this.displayProductStore()}
        <ShoppingCart productStore={this.props.productStore} />
      </div>
    );
  }
}
export default ShoppingStore;
