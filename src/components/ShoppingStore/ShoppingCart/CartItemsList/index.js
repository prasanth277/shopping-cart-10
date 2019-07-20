import React, { Component } from "react";
import "./style.css";
import CartItem from "./CartItem";
import { observer } from "mobx-react";
@observer
class CartItemsList extends Component {
  displayCartList = () => {
    return this.props.productStore.cartStore.cartProductsList.map(item => (
      <CartItem item={item} />
    ));
  };
  render() {
    return <div className="cartList">{this.displayCartList()}</div>;
  }
}
export default CartItemsList;
