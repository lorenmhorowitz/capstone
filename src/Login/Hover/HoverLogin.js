import "../../css/hover.css";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import createPalette from "@material-ui/core/styles/createPalette";
import hoverLogo from "./hoverLogo.png";
import Loading from "../../components/Loading";
import { LOGIN } from "../../constants/actionTypes";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import React, { Component } from "react";
import request from "request";
import { Redirect } from "react-router-dom";
import ToolBar from "@material-ui/core/Toolbar/Toolbar";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography/Typography";

const mapStateToProps = state => ({ ...state.auth });

const mapDispatchToProps = dispatch => ({
  onLogin: username => dispatch({ type: LOGIN, payload: username })
});

const LOGIN_ACCOUNT_API =
  "https://us-central1-hdqc-capstone.cloudfunctions.net/login";

const muiTheme = createMuiTheme({
  typography: {
    useNextVariants: true
  },
  palette: createPalette({
    primary: {
      main: "#212121"
    }
  })
});

class HoverLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
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
            redirect: true
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
    if (this.state.redirect) {
      return <Redirect push to="/home" />;
    }

    const errorMessage = (
      <Typography
        style={{
          marginTop: 15,
          marginLeft: "auto",
          marginRight: "auto",
          marginBottom: 5,
          display: "inline-block",
          color: "red",
          fontSize: 18
        }}
      >
        Unable to log in. Please try again.
      </Typography>
    );

    return (
      <div className="Hover">
        <MuiThemeProvider theme={muiTheme}>
          <div>
            <AppBar>
              <ToolBar>
                <img alt="Hover Logo" src={hoverLogo} style={{ width: 130 }} />
                <div style={{ display: "inline", marginLeft: "auto" }}>
                  <Button color="primary" style={{ color: "white" }}>
                    PRODUCT
                  </Button>
                  <Button color="primary" style={{ color: "white" }}>
                    DEMO
                  </Button>
                  <Button color="primary" style={{ color: "white" }}>
                    PRICING
                  </Button>
                  <Button color="primary" style={{ color: "white" }}>
                    LOG IN
                  </Button>
                  <Button
                    variant="outlined"
                    color="secondary"
                    style={{
                      color: "lightgreen",
                      borderColor: "lightgreen"
                    }}
                  >
                    SIGN UP
                  </Button>
                </div>
              </ToolBar>
            </AppBar>
          </div>
        </MuiThemeProvider>
        <div>
          <form
            onSubmit={e => {
              e.preventDefault();
            }}
          >
            <Typography
              style={{
                marginTop: 150,
                marginLeft: "auto",
                marginRight: "auto",
                display: "inline-block",
                fontSize: 40
              }}
            >
              Log In
            </Typography>
            <div className={this.props.container}>
              <TextField
                id="email-field"
                style={{ marginTop: 60, width: 400 }}
                margin="normal"
                variant="outlined"
                name="email"
                label="email"
                className={this.props.textField}
                onChange={this.handleEmailChange}
              />
            </div>
            <div className={this.props.container}>
              <TextField
                id="password-field"
                style={{ marginTop: 10, width: 400 }}
                margin="normal"
                variant="outlined"
                name="password"
                label="password"
                type="password"
                className={this.props.textField}
                onChange={this.handlePasswordChange}
                onKeyPress={ev => {
                  console.log("onKeyPress");
                  if (ev.key === "Enter") {
                    console.log("handleHoverLogin");
                    this.handleHoverLogin();
                  }
                }}
              />
            </div>
          </form>
          {this.state.loginError ? errorMessage : null}
          <form>
            <Button
              color="secondary"
              style={{
                marginTop: 50,
                color: "white",
                backgroundColor: "#489e5c",
                width: 400,
                height: 50
              }}
              onClick={this.handleHoverLogin}
            >
              Log in
            </Button>
          </form>
        </div>
        {this.state.loading ? <Loading /> : null}
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HoverLogin);
