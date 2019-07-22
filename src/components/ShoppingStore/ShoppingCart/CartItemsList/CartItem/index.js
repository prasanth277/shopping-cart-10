import React, { Component } from "react";
import "./style.css";
import { observer } from "mobx-react";
@observer
class CartItem extends Component {
  removeFromCart = () => {
    this.props.item.removeFromCart();
  };
  render() {
    return (
      <div className="cartItem">
        <div className="removeItem" onClick={this.removeFromCart}>
          <img src="/assets/closeImage.png" className="closeIcon" />
        </div>
        <div>
          <img src={this.props.item.image} className="cartProductImage" />
        </div>
        <div className="cartDetails">
          <span className="cartTitle">{this.props.item.title}</span>
          <span className="cartProductSize">
            {this.props.item.availableSizes[0]}
          </span>
          <span>Quantity: {this.props.item.quantity}</span>
        </div>
        <div className="priceContainer">
          <span className="priceOfItem">
            $ {this.props.item.price * this.props.item.quantity}
          </span>
        </div>
      </div>
    );
  }
}
export default CartItem;
