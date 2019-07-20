import React, { Component } from "react";
import "./style.css";
import CartItemsList from "./CartItemsList";
import CartItemsTotal from "./CartItemsTotal";
export default class ShoppingCart extends Component {
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
      <div className="cartContent">
        <div
          className={this.state.isCartVisible ? "openCartIcon" : "cartIcon"}
          onClick={this.showCartMenu}
        >
          {this.state.isCartVisible ? (
            <img src="/assets/close.jpg" className="cartImage" />
          ) : (
            <img src="/assets/cartImage.png" className="cartImage" />
          )}
        </div>
        <div className={this.state.isCartVisible ? "cartMenu" : "closeCart"}>
          {!this.state.isCartVisible ? (
            ""
          ) : (
            <div className="cartMessage">
              <div className="cartCount">c</div>
              <img src="/assets/cartImage.png" className="cartImageinCart" />
              <span className="cartLabel">Cart</span>
            </div>
          )}
          {this.state.isCartVisible ? <CartItemsList /> : ""}
          {this.state.isCartVisible ? <CartItemsTotal /> : ""}
        </div>
      </div>
    );
  }
}
