import React, { Component } from "react";
import {
  ButtonContainer,
  AddToCartbutton,
  AddToCartbuttonActive
} from "./StyledComponent.js";
export default class AddToCartButton extends Component {
  handleClick = () => {
    this.props.product.addToCart();
  };
  render() {
    return (
      <ButtonContainer>
        {!this.props.isHover ? (
          <AddToCartbutton onClick={this.handleClick}>
            Add to cart
          </AddToCartbutton>
        ) : (
          <AddToCartbuttonActive onClick={this.handleClick}>
            Add to cart
          </AddToCartbuttonActive>
        )}
      </ButtonContainer>
    );
  }
}
