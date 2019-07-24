import React, { Component } from "react";
import {
  CartTotalBlock,
  CartSubTotal,
  SubTotalLabel,
  CartTotal,
  PriceBlock,
  InstallDetails,
  CheckOutBlock,
  CheckOut
} from "./StyledComponent.js";
import { observer } from "mobx-react";
@observer
class CartItemsTotal extends Component {
  getPriceOfCartProducts = () => {
    const { productStore } = this.props;
  };
  render() {
    const { productStore } = this.props;
    return (
      <CartTotalBlock>
        <CartSubTotal>
          <SubTotalLabel>SUBTOTAL</SubTotalLabel>

          <CartTotal>
            ${this.props.productStore.cartStore.totalCartPrice.toFixed(2)}
          </CartTotal>
          <PriceBlock>
            <InstallDetails>
              {this.props.productStore.cartStore.totalCartInstallments !== 0
                ? " OR UP TO " +
                  this.props.productStore.cartStore.totalCartInstallments +
                  " X " +
                  (
                    this.props.productStore.cartStore.totalCartPrice /
                    this.props.productStore.cartStore.totalCartInstallments
                  ).toFixed(2)
                : ""}
            </InstallDetails>
          </PriceBlock>
        </CartSubTotal>
        <CheckOutBlock>
          <CheckOut>checkout</CheckOut>
        </CheckOutBlock>
      </CartTotalBlock>
    );
  }
}
export default CartItemsTotal;
