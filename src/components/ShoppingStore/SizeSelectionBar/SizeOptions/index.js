import React, { Component } from "react";

import { Size, ActiveSize } from "./StyledComponent";
export default class SizeOptions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSelected: false
    };
  }
  onSelectSize = e => {
    this.setState({
      isSelected: !this.state.isSelected
    });
    this.props.productStore.changeSizeFilter(this.props.label);
  };
  render() {
    return (
      <>
        {!this.state.isSelected ? (
          <Size onClick={this.onSelectSize}>{this.props.value}</Size>
        ) : (
          <ActiveSize onClick={this.onSelectSize}>
            {this.props.value}
          </ActiveSize>
        )}
      </>
    );
  }
}
