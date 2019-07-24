import React, { Component } from "react";
import {
  SizeIcon,
  SizeLabel,
  SizeText,
  SelectionBar
} from "./StyleComponent.js";
import SizeOptions from "./SizeOptions";
export default class SizeSelectionBar extends Component {
  displaySizes = () => {
    return this.props.sizes.map(size => (
      <SizeOptions
        {...size}
        productStore={this.props.productStore}
        key={size.label}
      />
    ));
  };
  render() {
    return (
      <SizeIcon>
        <SizeLabel>
          <SizeText>Sizes:</SizeText>
        </SizeLabel>
        <SelectionBar>{this.displaySizes()}</SelectionBar>
      </SizeIcon>
    );
  }
}
