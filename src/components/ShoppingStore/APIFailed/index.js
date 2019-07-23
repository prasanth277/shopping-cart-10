import React, { Component } from "react";
import "./style.css";
export default class APIFailed extends Component {
  render() {
    return (
      <div className="errorContainer">
        <span className="failedMessage">Failed to load data......</span>
      </div>
    );
  }
}
