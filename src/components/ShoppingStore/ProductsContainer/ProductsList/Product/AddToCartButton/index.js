import React, { Component } from "react";
import "./style.css";
export default class AddToCartButton extends Component {
  render() {
    return (
      <div className="buttonContainer">
        <button
          className={
            !this.props.isHover ? "addToCartbutton" : "addToCartbuttonActive"
          }
        >
          Add to cart
        </button>
      </div>
    );
  }
}
