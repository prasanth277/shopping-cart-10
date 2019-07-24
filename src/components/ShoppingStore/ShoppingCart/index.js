import React, { Component } from "react";
import {
  CartContent,
  CartIconContent,
  CartIcon,
  OpenCartIcon,
  CartImage,
  OuterCartNo,
  CartMenu,
  CloseCart,
  CartMessage,
  CartCount,
  CartImageinCart,
  CartLabel
} from "./StyledComponent.js";
import CartItemsList from "./CartItemsList";
import CartItemsTotal from "./CartItemsTotal";
import { observer } from "mobx-react";
@observer
class ShoppingCart extends Component {
  state = {
    isCartVisible: false
  };
  showCartMenu = () => {
    this.setState({
      isCartVisible: !this.state.isCartVisible
    });
  };
  render() {
    return (
      <CartContent className="cartContent">
        {this.state.isCartVisible ? (
          <OpenCartIcon onClick={this.showCartMenu}>
            <CartImage src="/assets/close.jpg" />
          </OpenCartIcon>
        ) : (
          <CartIcon onClick={this.showCartMenu}>
            <OuterCartNo>
              {this.props.productStore.cartStore.cartProductsList.length}
            </OuterCartNo>
            <CartImage src="/assets/cartImage.png" />
          </CartIcon>
        )}
        {this.state.isCartVisible ? (
          <CartMenu>
            <CartMessage>
              <CartCount>
                {this.props.productStore.cartStore.cartProductsList.length}
              </CartCount>
              <CartImageinCart src="/assets/cartImage.png" />
              <CartLabel>Cart</CartLabel>
            </CartMessage>
            <CartItemsList productStore={this.props.productStore} />
            <CartItemsTotal productStore={this.props.productStore} />
          </CartMenu>
        ) : (
          <CloseCart />
        )}
      </CartContent>
    );
  }
}

export default ShoppingCart;
