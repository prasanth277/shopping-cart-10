import React, { Component } from "react";
import "./style.css";
export default class ProductImage extends Component {
  render() {
    return (
      <div className="productImageContainer">
        {this.props.isFreeShipping ? (
          <div className="shippingDiv">
            <span className="shippingText">Free shipping</span>
          </div>
        ) : (
          ""
        )}
        <img src={this.props.image} className="productImage" />
      </div>
    );
  }
}
