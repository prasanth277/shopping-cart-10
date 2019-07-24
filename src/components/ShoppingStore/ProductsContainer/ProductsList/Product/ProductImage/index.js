import React, { Component } from "react";
import {
  ProductImageContainer,
  ShippingDiv,
  ShippingText,
  ProductImageSrc
} from "./StyledComponent.js";
export default class ProductImage extends Component {
  render() {
    return (
      <ProductImageContainer>
        {this.props.isFreeShipping ? (
          <ShippingDiv>
            <ShippingText>Free shipping</ShippingText>
          </ShippingDiv>
        ) : (
          ""
        )}
        <ProductImageSrc src={this.props.image} />
      </ProductImageContainer>
    );
  }
}
