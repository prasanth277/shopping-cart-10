import React, { Component } from "react";
import {
  SortByOptionsContainer,
  OrderByText,
  DropDown,
  Option
} from "./StyledComponent.js";
export default class SortByOption extends Component {
  displayOptions = () => {
    return this.props.sortByOptions.map(element => (
      <option value={element.value}>{element.label}</option>
    ));
  };
  changeSortFilter = e => {
    this.props.productStore.changeSortFilter(e.target.value);
  };
  render() {
    return (
      <SortByOptionsContainer>
        <OrderByText>Order by </OrderByText>
        <DropDown onChange={this.changeSortFilter} data-testid="options">
          <Option value="" disabled selected>
            Select
          </Option>
          {this.displayOptions()}
        </DropDown>
      </SortByOptionsContainer>
    );
  }
}
