import { observable } from "mobx";
export default class CartStore {
  @observable cartProductsList = [];

  addToCart(val) {
    if (this.cartProductsList.indexOf(val) == -1) {
      this.cartProductsList.push(val);
    }
  }
}
