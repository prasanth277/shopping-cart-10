import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ShoppingStore from "./components/ShoppingStore";
import ProductStore from "./store/ProductStore";
import productsList from "./constants/productsList";
const productStore = new ProductStore();
function App() {
  //console.log(productStore.)
  return (
    <div>
      <ShoppingStore productStore={productStore} />
    </div>
  );
}

export default App;
