import React, { Component } from "react";
import { FailedMessage, ErrorContainer } from "./StyledComponent.js";
export default class APIFailed extends Component {
  render() {
    return (
      <ErrorContainer>
        <FailedMessage>Failed to load data......</FailedMessage>
      </ErrorContainer>
    );
  }
}
