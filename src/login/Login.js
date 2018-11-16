import React, { Component } from "react";
import "../css/Login.css";
import Button from "@material-ui/core/Button";
import Loading from "../components/Loading";
import request from "request";
import { Redirect } from "react-router-dom";
import TextField from "../components/TextField";

const LOGIN_ACCOUNT_API =
  "https://us-central1-hdqc-capstone.cloudfunctions.net/login";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      loginError: false,
      password: "",
      homeRedirect: false,
      hoverRedirect: false,
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
    this.setState({ hoverRedirect: true });
  };

  handleLogin = () => {
    this.setState({
      loading: true
    });
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
          this.setState({
            loading: false
          });
          return;
        }

        if (response.statusCode === 200) {
          this.setState({
            loading: false,
            loginError: false,
            homeRedirect: true
          });
        } else {
          this.setState({
            loading: false,
            loginError: true
          });
        }
      }.bind(this)
    );
  };

  render() {
    if (this.state.hoverRedirect) {
      return <Redirect push to="/hover" />;
    }

    if (this.state.homeRedirect) {
      return <Redirect push to="/home" />;
    }

    return (
      <div className="Img">
        <div id="loginSquare">
          <div id="title">
            <span id="Corner">Corner</span>
            <span id="Stone">Stone</span>
          </div>
          <TextField label="email" handleChange={this.handleEmailChange} />
          <TextField
            label="password"
            handleChange={this.handlePasswordChange}
          />
          <Button id="Login" onClick={this.handleLogin}>
            Log In
          </Button>
          <Button id="HoverLogin" onClick={this.handleHoverLogin}>
            Login With Hover
          </Button>
        </div>
        {this.state.loading ? <Loading /> : null}
      </div>
    );
  }
}

export default Login;
