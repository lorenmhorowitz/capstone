import "../css/Login.css";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import Loading from "../components/Loading";
import { LOGIN } from "../constants/actionTypes";
import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import request from "request";
import TextField from "../components/TextField";

const mapStateToProps = state => ({ ...state.auth });

const mapDispatchToProps = dispatch => ({
  onLogin: username => dispatch({ type: LOGIN, payload: username })
});

const LOGIN_ACCOUNT_API =
  "https://us-central1-hdqc-capstone.cloudfunctions.net/login";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      homeRedirect: false,
      hoverRedirect: false,
      loading: false,
      loginError: false,
      password: "",
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
          this.props.onLogin(this.state.username);
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

    const errorMessage = <p id="error">Unable to log in. Please try again.</p>;

    return (
      <div className="Img">
        <div className="grid-container">
          <div className="grid-item" />

          <div className="grid-item loginSquare">
            <div id="title">
              <span id="Corner">Corner</span>
              <span id="Stone">Stone</span>
            </div>
            <TextField label="email" handler={this.handleEmailChange} />
            <TextField label="password" handler={this.handlePasswordChange} />
            <Button id="Login" onClick={this.handleLogin}>
              Log In
            </Button>
            <Button id="HoverLogin" onClick={this.handleHoverLogin}>
              Login With Hover
            </Button>
            {this.state.loginError ? errorMessage : null}
          </div>
        </div>
        {this.state.loading ? <Loading /> : null}
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
