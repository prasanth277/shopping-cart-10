import React, { Component } from "react";
import "./style.css";
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
      <div className="cartContent">
        <div
          className={this.state.isCartVisible ? "openCartIcon" : "cartIcon"}
          onClick={this.showCartMenu}
        >
          {this.state.isCartVisible ? (
            <img src="/assets/close.jpg" className="cartImage" />
          ) : (
            <>
              <div className="outerCartNo">
                {this.props.productStore.cartStore.cartProductsList.length}
              </div>
              <img src="/assets/cartImage.png" className="cartImage" />
            </>
          )}
        </div>
        <div className={this.state.isCartVisible ? "cartMenu" : "closeCart"}>
          {!this.state.isCartVisible ? (
            ""
          ) : (
            <div className="cartMessage">
              <div className="cartCount">
                {this.props.productStore.cartStore.cartProductsList.length}
              </div>
              <img src="/assets/cartImage.png" className="cartImageinCart" />
              <span className="cartLabel">Cart</span>
            </div>
          )}
          {this.state.isCartVisible ? (
            <CartItemsList productStore={this.props.productStore} />
          ) : (
            ""
          )}
          {this.state.isCartVisible ? (
            <CartItemsTotal productStore={this.props.productStore} />
          ) : (
            ""
          )}
        </div>
      </div>
    );
  }
}

export default ShoppingCart;
