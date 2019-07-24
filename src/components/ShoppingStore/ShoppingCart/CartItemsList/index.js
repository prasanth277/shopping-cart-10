import React, { Component } from "react";
import { CartList, NoProducts, AddProducts, Smiley } from "./StyledComponent";
import CartItem from "./CartItem";
import { observer } from "mobx-react";
@observer
class CartItemsList extends Component {
  displayCartList = () => {
    return this.props.productStore.cartStore.cartProductsList.map(item => (
      <CartItem item={item} />
    ));
  };
  render() {
    return (
      <CartList length={this.displayCartList().length}>
        {this.displayCartList().length === 0 ? (
          <NoProducts>
            <AddProducts>Add some products to cart</AddProducts>
            <Smiley>:)</Smiley>
          </NoProducts>
        ) : (
          this.displayCartList()
        )}
      </CartList>
    );
  }
}
export default CartItemsList;
