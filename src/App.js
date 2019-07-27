import React from "react";
import "./App.css";
import ShoppingStore from "./components/ShoppingStore";
import ProductStore from "./store/ProductStore";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import LoginPage from "./components/LoginPage";
import SignUpPage from "./components/SignUpPage";
import * as Cookies from "js-cookie";

const productStore = new ProductStore();
function App() {
  return (
    <Router>
      <PrivateRoute path="/" component={DisplayShoppingStore} />
      <ProtectedRoute path="/login/" component={LoginPage} />
      <ProtectedRoute path="/signup/" component={SignUpPage} />
    </Router>
  );
}
function ProtectedRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        Cookies.get("loginUser") === undefined ? (
          <Component />
        ) : (
          <Redirect to={{ pathname: "/" }} />
        )
      }
    />
  );
}
function PrivateRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        Cookies.get("loginUser") === undefined ? (
          <Redirect to={{ pathname: "/login" }} />
        ) : (
          <Component />
        )
      }
    />
  );
}
function DisplayShoppingStore() {
  return <ShoppingStore productStore={productStore} />;
}

export default App;
