import React, { Component } from "react";

export default class SortByOption extends Component {
  displayOptions = () => {
    return this.props.sortByOptions.map(element => (
      <option value={element.value}>{element.label}</option>
    ));
  };
  render() {
    return (
      <div>
        <span>Order by </span>
        <select>
          <option value="" disabled selected>
            Select
          </option>
          {this.displayOptions()}
        </select>
      </div>
    );
  }
}
