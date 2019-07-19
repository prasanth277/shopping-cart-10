import React, { Component } from "react";
import ProductImage from "./ProductImage";
import ProductDetails from "./ProductDetails";
import AddToCartButton from "./AddToCartButton";
import "./style.css";
export default class Product extends Component {
  state = {
    isHover: false
  };
  handleOver = () => {
    this.setState(
      {
        isHover: true
      },
      () => console.log(this.state.isHover)
    );
  };
  handleLeave = () => {
    this.setState({
      isHover: false
    });
  };
  render() {
    return (
      <div
        className="product"
        onMouseOver={this.handleOver}
        onMouseLeave={this.handleLeave}
      >
        <ProductImage
          image={this.props.product.image}
          isFreeShipping={this.props.product.isFreeShipping}
        />
        <ProductDetails product={this.props.product} />
        <AddToCartButton isHover={this.state.isHover} />
      </div>
    );
  }
}
