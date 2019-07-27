import React, { Component } from "react";
import {
  SizeIcon,
  SizeLabel,
  SizeText,
  SelectionBar,
  SignOutButton,
  SignOutLabel
} from "./StyleComponent.js";
import SizeOptions from "./SizeOptions";
import { withRouter } from "react-router-dom";
@withRouter
class SizeSelectionBar extends Component {
  displaySizes = () => {
    return this.props.sizes.map(size => (
      <SizeOptions
        {...size}
        productStore={this.props.productStore}
        key={size.label}
      />
    ));
  };
  signOutFromHome = () => {
    this.props.productStore.clearCookie();
    this.props.history.push("/");
  };
  render() {
    return (
      <SizeIcon>
        <SizeLabel>
          <SizeText>Sizes:</SizeText>
        </SizeLabel>
        <SelectionBar>{this.displaySizes()}</SelectionBar>
        <SignOutButton onClick={this.signOutFromHome}>
          <SignOutLabel>signout</SignOutLabel>
        </SignOutButton>
      </SizeIcon>
    );
  }
}
export default SizeSelectionBar;
