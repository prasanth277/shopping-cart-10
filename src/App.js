import React from "react";
import "./App.css";
import ShoppingStore from "./components/ShoppingStore";
import ProductStore from "./store/ProductStore";

const productStore = new ProductStore();
function App() {
  return (
    <div>
      <ShoppingStore productStore={productStore} />
    </div>
  );
}

export default App;
