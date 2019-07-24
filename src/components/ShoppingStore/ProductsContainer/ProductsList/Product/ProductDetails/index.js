import React, { Component } from "react";
import {
  ProductDetailsContainer,
  ProductTitle,
  ProductTitleText,
  PriceContainer,
  PriceFormat,
  ProductPrice,
  InstallmentsContainer,
  InstallmentsText,
  InstallmentsCal
} from "./StyledComponent.js";
export default class ProductDetails extends Component {
  render() {
    const { product } = this.props;
    return (
      <ProductDetailsContainer>
        <ProductTitle>
          <ProductTitleText>{product.title}</ProductTitleText>
        </ProductTitle>
        <PriceContainer>
          <PriceFormat>
            {product.currencyFormat}
            <ProductPrice>{Math.floor(product.price)}</ProductPrice>.
            {(product.price + "").split(".")[1]}
          </PriceFormat>
        </PriceContainer>
        {product.installments > 0 ? (
          <InstallmentsContainer>
            <InstallmentsCal>
              or {product.installments}x
              <InstallmentsText>
                {product.currencyFormat +
                  "" +
                  (product.price / product.installments).toFixed(2)}
              </InstallmentsText>
            </InstallmentsCal>
          </InstallmentsContainer>
        ) : (
          ""
        )}
      </ProductDetailsContainer>
    );
  }
}
