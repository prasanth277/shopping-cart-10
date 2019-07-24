import React, { Component } from "react";
import ProductImage from "./ProductImage";
import ProductDetails from "./ProductDetails";
import AddToCartButton from "./AddToCartButton";
import { ProductContainer } from "./StyledComponent.js";
export default class Product extends Component {
  state = {
    isHover: false
  };
  handleOver = () => {
    this.setState({
      isHover: true
    });
  };
  handleLeave = () => {
    this.setState({
      isHover: false
    });
  };
  render() {
    return (
      <ProductContainer
        onMouseOver={this.handleOver}
        onMouseLeave={this.handleLeave}
      >
        <ProductImage
          image={this.props.product.image}
          isFreeShipping={this.props.product.isFreeShipping}
        />
        <ProductDetails product={this.props.product} />
        <AddToCartButton
          isHover={this.state.isHover}
          product={this.props.product}
        />
      </ProductContainer>
    );
  }
}
