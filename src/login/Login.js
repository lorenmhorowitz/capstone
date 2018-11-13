import React, { Component } from "react";
import "../css/Login.css";
import Button from "@material-ui/core/Button";
import request from "request";
import { Redirect } from "react-router-dom";
import TextField from "../components/TextField";

const LOGIN_ACCOUNT_API =
  "https://us-central1-hdqc-capstone.cloudfunctions.net/login";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loginError: false,
      password: "",
      redirect: false,
      username: ""
    };
  }

  handleEmailChange = data => {
    this.setState({ username: data.target.value });
  };

  handlePasswordChange = data => {
    this.setState({ password: data.target.value });
  };

  handleHoverLogin = () => {
    this.setState({ redirect: true });
  };

  handleLogin = () => {
    request.post(
      {
        url: LOGIN_ACCOUNT_API,
        headers: {
          "Content-Type": "application/json"
        },
        json: true,
        body: {
          kind: "HoverAuthentication",
          key: this.state.username,
          value: {
            password: this.state.password
          }
        }
      },
      function(error, response) {
        if (error) {
          return;
        }

        if (response.statusCode === 200) {
          this.setState({
            loginError: false,
            redirect: true
          });
        } else {
          this.setState({ loginError: true });
        }
      }.bind(this)
    );
  };

  render() {
    if (this.state.redirect) {
      return <Redirect push to="/hover" />;
    }
    return (
      <div className="Img">
        <div id="loginSquare">
          <div id="title">
            <span id="Corner">Corner</span>
            <span id="Stone">Stone</span>
          </div>
          <TextField label="email" />
          <TextField label="password" />
          <Button id="Login" onClick={this.handleLogin}>
            Log In
          </Button>
          <Button id="HoverLogin" onClick={this.handleHoverLogin}>
            Login With Hover
          </Button>
        </div>
      </div>
    );
  }
}

export default Login;
