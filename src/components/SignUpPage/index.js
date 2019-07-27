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
  StatusMessage,
  StatusLabel,
  StatusMessageFail,
  StatusLabelFail,
  ButtonLabel,
  Loader
} from "../LoginPage/StyledComponent";
const authenticate = new AuthenticationStore();
@withRouter
class SignUpPage extends Component {
  state = {
    isRegistered: "",
    isLoading: false
  };
  registerationSuccess = () => {
    this.setState({
      isRegistered: true,
      isLoading: false
    });
  };
  registerationFail = () => {
    this.setState({
      isRegistered: false,
      isLoading: false
    });
  };
  submitDetails = e => {
    this.setState({
      isLoading: true
    });
    authenticate.postSignUpCredentials(
      this.registerationSuccess,
      this.registerationFail
    );
  };

  displayStatus = () => {
    if (this.state.isRegistered === true) {
      return (
        <StatusMessage>
          <StatusLabel>You've successfully registered!!!</StatusLabel>
        </StatusMessage>
      );
    } else if (this.state.isRegistered === false) {
      return (
        <StatusMessageFail>
          <StatusLabelFail>Already registered!!!</StatusLabelFail>
        </StatusMessageFail>
      );
    }
  };
  goToLogin = () => {
    this.props.history.push("/login");
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

          <Button onClick={this.submitDetails}>
            {this.state.isLoading ? <Loader /> : ""}
            <ButtonLabel>SIGN UP</ButtonLabel>
          </Button>

          <Label onClick={this.goToLogin}>Log in</Label>
        </AuthenticationDetails>
        {this.displayStatus()}
      </Container>
    );
  }
}
export default SignUpPage;
