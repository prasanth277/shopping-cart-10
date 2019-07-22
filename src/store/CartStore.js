import { observable } from "mobx";
import { computed } from "mobx";

export default class CartStore {
  @observable cartProductsList = [];

  addToCart(val) {
    if (this.cartProductsList.indexOf(val) == -1) {
      this.cartProductsList.push(val);
    }
  }
  removeFromCart(val, quantity) {
    this.cartProductsList.splice(this.cartProductsList.indexOf(val), 1);

    // this.cartProductsList.forEach(element => {
    //   this.totalPrice += element.price;
    // });
    console.log(quantity);
  }
  @computed get totalCartPrice() {
    var total = 0;
    this.cartProductsList.forEach(element => {
      total = total + element.price * element.quantity;
    });

    return total;
  }
  @computed get totalCartInstallments() {
    var total = 0;
    this.cartProductsList.forEach(element => {
      total = total + element.installments * element.quantity;
    });
    console.log(total);
    return total;
  }
}
