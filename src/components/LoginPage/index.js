import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import AuthenticationStore from "../../store/AuthenticationStore";

import {
  AuthenticationDetails,
  Container,
  InputUserName,
  InputPassword,
  Button,
  Label,
  Alert
} from "./StyledComponent";

const authenticate = new AuthenticationStore();
@withRouter
class LoginPage extends Component {
  state = {
    isVerified: false
  };
  submitDetails = e => {
    authenticate.postLogiInCredentials(
      this.onSuccessLogin,
      this.onFailedLogin,
      this.verifyUser
    );
  };
  onSuccessLogin = () => {
    this.props.history.push("/");
  };
  onFailedLogin = () => {
    this.props.history.push("/login/");
  };
  goToSignup = () => {
    this.props.history.push("/signup");
  };
  verifyUser = () => {
    this.setState({
      isVerified: true
    });
  };
  render() {
    return (
      <Container>
        <AuthenticationDetails>
          <InputUserName
            type="text"
            placeholder="Username"
            onChange={authenticate.handleUserNameChange}
          />
          <InputPassword
            type="password"
            placeholder="Password"
            onChange={authenticate.handlePasswordChange}
          />
          {this.state.isVerified ? <Alert>Not a valid details</Alert> : ""}
          <Button onClick={this.submitDetails}>LOGIN</Button>

          <Label onClick={this.goToSignup}>Sign up</Label>
        </AuthenticationDetails>
      </Container>
    );
  }
}
export default LoginPage;
