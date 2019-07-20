class ProductItem {
  // productItem = {};
  availableSizes = [];
  currencyFormat = "";
  currencyId = "";
  description = "";
  id = 0;
  installments = "";
  isFreeShipping = false;
  price = 0;
  sku = 0;
  style = "";
  title = "";
  image = "";
  productStore = "";
  constructor(productStore, productItem) {
    this.availableSizes = productItem.availableSizes;
    this.currencyFormat = productItem.currencyFormat;
    this.currencyId = productItem.currencyId;
    this.description = productItem.description;
    this.id = productItem.id;
    this.installments = productItem.installments;
    this.isFreeShipping = productItem.isFreeShipping;
    this.price = productItem.price;
    this.sku = productItem.sku;
    this.style = productItem.style;
    this.title = productItem.title;
    this.image = productItem.image;
    this.productStore = productStore;
  }
  addToCart() {
    this.productStore.cartStore.push(this);
  }
}
export default ProductItem;
