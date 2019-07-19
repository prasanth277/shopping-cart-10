import React, { Component } from "react";
import "./style.css";
import SizeOptions from "./SizeOptions";
export default class SizeSelectionBar extends Component {
  displaySizes = () => {
    const sizes = ["XS", "S", "M", "ML", "L", "XL", "XXL"];
    return sizes.map(size => <SizeOptions size={size} />);
  };
  render() {
    return (
      <div className="sizeCon">
        <div className="sizeLabel">
          <span className="sizeText">Sizes:</span>
        </div>
        <div class="selectionBar">{this.displaySizes()}</div>
      </div>
    );
  }
}
