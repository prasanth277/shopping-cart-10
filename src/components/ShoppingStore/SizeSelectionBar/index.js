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
        <SelectionBar data-testid="selectionBar">
          {this.displaySizes()}
        </SelectionBar>
      </SizeIcon>
    );
  }
}
export default SizeSelectionBar;
