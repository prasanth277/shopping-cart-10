import React, { Component } from "react";
import "./style.css";
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
      <div className={this.state.onHover ? "cartItemHover" : "cartItem"}>
        <div
          className="removeItem"
          onClick={this.removeFromCart}
          onMouseOver={this.handleOver}
          onMouseLeave={this.handleLeave}
        >
          {this.state.onHover ? (
            <img src="/assets/close.jpg" className="closeIcon" />
          ) : (
            <img src="/assets/closeImage.png" className="closeIcon" />
          )}
        </div>
        <div>
          <img src={this.props.item.image} className="cartProductImage" />
        </div>
        <div className="cartDetails">
          <span className={this.state.onHover ? "cartTitleHover" : "cartTitle"}>
            {this.props.item.title}
          </span>
          <span
            className={
              this.state.onHover ? "cartProductSizeHover" : "cartProductSize"
            }
          >
            {this.props.item.availableSizes[0]}
          </span>
          <span className={this.state.onHover ? "quantityHover" : "quantity"}>
            Quantity: {this.props.item.quantity}
          </span>
        </div>
        <div className="priceContainer">
          <span
            className={this.state.onHover ? "priceOfItemHover" : "priceOfItem"}
          >
            $ {this.props.item.price * this.props.item.quantity}
          </span>
        </div>
      </div>
    );
  }
}
export default CartItem;
