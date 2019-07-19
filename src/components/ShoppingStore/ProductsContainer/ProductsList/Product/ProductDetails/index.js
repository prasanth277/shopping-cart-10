import React, { Component } from "react";
import "./style.css";
export default class ProductDetails extends Component {
  render() {
    const { product } = this.props;
    return (
      <div className="productDetailsContainer">
        <div className="productTitle">
          <span className="productTitleText">{product.title}</span>
        </div>
        <div className="priceContainer">
          <span>
            {product.currencyFormat}
            <span className="productPrice">{Math.floor(product.price)}</span>.
            {(product.price + "").split(".")[1]}
          </span>
        </div>
        {product.installments > 0 ? (
          <div className="installMentsContainer">
            <span>
              or {product.installments}x
              <span className="installmentsText">
                {product.currencyFormat +
                  "" +
                  (product.price / product.installments).toFixed(2)}
              </span>
            </span>
          </div>
        ) : (
          ""
        )}
      </div>
    );
  }
}
