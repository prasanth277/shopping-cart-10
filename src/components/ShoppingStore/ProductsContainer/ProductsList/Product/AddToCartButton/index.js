import React, { Component } from "react";
import "./style.css";
export default class AddToCartButton extends Component {
  handleClick = () => {
    this.props.product.addToCart();
  };
  render() {
    return (
      <div className="buttonContainer">
        <button
          className={
            !this.props.isHover ? "addToCartbutton" : "addToCartbuttonActive"
          }
          onClick={this.handleClick}
        >
          Add to cart
        </button>
      </div>
    );
  }
}
