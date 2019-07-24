import React, { Component } from "react";
import {
  CartItemBlock,
  RemoveItem,
  CloseIcon,
  CartProductImage,
  CartDetails,
  CartTitle,
  CartProductDiv,
  CartProductSize,
  Quantity,
  PriceOfItem,
  PriceContainer
} from "./StyledComponent.js";
import { observer } from "mobx-react";
@observer
class CartItem extends Component {
  state = {
    onHover: false
  };
  removeFromCart = () => {
    this.props.item.removeFromCart();
  };
  handleOver = () => {
    this.setState({
      onHover: true
    });
  };
  handleLeave = () => {
    this.setState({
      onHover: false
    });
  };
  render() {
    return (
      <CartItemBlock onHover={this.state.onHover ? "onHover" : "notOnHover"}>
        <RemoveItem
          onClick={this.removeFromCart}
          onMouseOver={this.handleOver}
          onMouseLeave={this.handleLeave}
        >
          {this.state.onHover ? (
            <CloseIcon src="/assets/close.jpg" />
          ) : (
            <CloseIcon src="/assets/closeImage.png" />
          )}
        </RemoveItem>

        <CartProductDiv>
          <CartProductImage src={this.props.item.image} />
        </CartProductDiv>
        <CartDetails>
          <CartTitle onHover={this.state.onHover ? "onHover" : "notOnHover"}>
            {this.props.item.title}
          </CartTitle>
          <CartProductSize
            onHover={this.state.onHover ? "onHover" : "notOnHover"}
          >
            {" "}
            {this.props.item.availableSizes[0]}
          </CartProductSize>
          <Quantity onHover={this.state.onHover ? "onHover" : "notOnHover"}>
            Quantity:{this.props.item.quantity}
          </Quantity>
        </CartDetails>
        <PriceContainer>
          <PriceOfItem>
            ${this.props.item.price * this.props.item.quantity}
          </PriceOfItem>
        </PriceContainer>
      </CartItemBlock>
    );
  }
}
export default CartItem;
