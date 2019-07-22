import React, { Component } from "react";
import "./style.css";
export default class CartItemsTotal extends Component {
  getPriceOfCartProducts = () => {
    const { productStore } = this.props;
  };
  render() {
    const { productStore } = this.props;
    return (
      <div className="cartTotalBlock">
        <div className="cartSubTotal">
          <span className="SubTotalLabel">SUBTOTAL</span>
          <span className="cartTotal">$price</span>
        </div>
        <div className="checkOutBlock">
          <div className="checkOut">checkout</div>
        </div>
      </div>
    );
  }
}