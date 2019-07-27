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
  Alert,
  ButtonLabel,
  Loader
} from "./StyledComponent";

const authenticate = new AuthenticationStore();
@withRouter
class LoginPage extends Component {
  state = {
    isVerified: false,
    isLoading: false
  };
  submitDetails = e => {
    this.setState({
      isLoading: true
    });
    authenticate.postLogiInCredentials(
      this.onSuccessLogin,
      this.onFailedLogin,
      this.verifyUser
    );
  };
  onSuccessLogin = () => {
    this.setState({
      isLoading: false
    });
    this.props.history.push("/");
  };
  onFailedLogin = () => {
    this.setState({
      isLoading: false
    });
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
  removeAlert = () => {
    this.setState({
      isVerified: false
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
            onFocus={this.removeAlert}
          />
          <InputPassword
            type="password"
            placeholder="Password"
            onChange={authenticate.handlePasswordChange}
          />
          {this.state.isVerified ? (
            <Alert>Couldn't find your account</Alert>
          ) : (
            ""
          )}
          <Button onClick={this.submitDetails}>
            {this.state.isLoading ? <Loader /> : ""}
            <ButtonLabel>LOGIN</ButtonLabel>
          </Button>

          <Label onClick={this.goToSignup}>Sign up</Label>
        </AuthenticationDetails>
      </Container>
    );
  }
}
export default LoginPage;
