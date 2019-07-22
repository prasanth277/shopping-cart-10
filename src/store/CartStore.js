import { observable } from "mobx";
export default class CartStore {
  @observable cartProductsList = [];

  addToCart(val) {
    if (this.cartProductsList.indexOf(val) == -1) {
      this.cartProductsList.push(val);
    }
  }
  removeFromCart(val) {
    this.cartProductsList.splice(this.cartProductsList.indexOf(val), 1);
  }
}
