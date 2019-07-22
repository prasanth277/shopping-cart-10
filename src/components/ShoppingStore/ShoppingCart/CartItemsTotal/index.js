import React, { Component } from "react";
import "./style.css";
import { observer } from "mobx-react";
@observer
class CartItemsTotal extends Component {
  getPriceOfCartProducts = () => {
    const { productStore } = this.props;
  };
  render() {
    const { productStore } = this.props;
    return (
      <div className="cartTotalBlock">
        <div className="cartSubTotal">
          <span className="SubTotalLabel">SUBTOTAL</span>

          <span className="cartTotal">
            ${this.props.productStore.cartStore.totalCartPrice.toFixed(2)}
          </span>
          <div className="priceBlock">
            <span className="installDetails">
              {this.props.productStore.cartStore.totalCartInstallments !== 0
                ? " OR UP TO " +
                  this.props.productStore.cartStore.totalCartInstallments +
                  " X " +
                  (
                    this.props.productStore.cartStore.totalCartPrice /
                    this.props.productStore.cartStore.totalCartInstallments
                  ).toFixed(2)
                : ""}
            </span>
          </div>
        </div>
        <div className="checkOutBlock">
          <div className="checkOut">checkout</div>
        </div>
      </div>
    );
  }
}
export default CartItemsTotal;
