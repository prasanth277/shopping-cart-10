import React, { Component } from "react";
import "./style.css";
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
  };
  render() {
    return (
      <div
        className={!this.state.isSelected ? "size" : "activeSize"}
        onClick={this.onSelectSize}
        value={this.props.size}
      >
        {this.props.size}
      </div>
    );
  }
}
