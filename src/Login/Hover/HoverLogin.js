import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import createPalette from "@material-ui/core/styles/createPalette";
import hoverLogo from "../../hoverLogo.png";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import React, { Component } from "react";
import request from "request";
import ToolBar from "@material-ui/core/Toolbar/Toolbar";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography/Typography";
import "../../css/hover.css";

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
      username: "",
      password: ""
    };
  }

  handleEmailChange = data => {
    this.setState({ username: data.target.value });
  };

  handlePasswordChange = data => {
    this.setState({ password: data.target.value });
  };

  handleHoverLogin = () => {
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
          password: this.state.password
        }
      },
      function(error, response, body) {
        if (error) {
          return;
        }

        if (response.statusCode === 200) {
          this.props.history.replace("/home");
        }
      }
    );
  };

  render() {
    return (
      <div className="Hover">
        <MuiThemeProvider theme={muiTheme}>
          <div>
            <AppBar>
              <ToolBar>
                <img src={hoverLogo} style={{ width: 130 }} />
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
          <form className={this.props.container} noValidate autoComplete="off">
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
          </form>
          <form className={this.props.container} noValidate autoComplete="off">
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
            />
          </form>
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
      </div>
    );
  }
}

export default HoverLogin;
