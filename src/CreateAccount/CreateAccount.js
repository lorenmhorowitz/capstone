import "../css/Login.css";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import Loading from "../components/Loading";
import { LOGIN } from "../constants/actionTypes";
import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import request from "request";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";

const mapStateToProps = state => ({ ...state.auth });

const mapDispatchToProps = dispatch => ({
  onLogin: username => dispatch({ type: LOGIN, payload: username })
});

const CREATE_ACCOUNT_API =
  "https://us-central1-hdqc-capstone.cloudfunctions.net/createAccount";

class CreateAccount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dialogueOpen: false,
      homeRedirect: false,
      loading: false,
      loginRedirect: false,
      createAccountError: false,
      password: "",
      username: ""
    };
  }

  handleEmailChange = data => {
    this.setState({ username: data.target.value });
  };

  handleHomeRedirect = () => {
    this.setState({ homeRedirect: true });
  };

  handleLoginRedirect = () => {
    this.setState({ loginRedirect: true });
  };

  handlePasswordChange = data => {
    this.setState({ password: data.target.value });
  };

  handleCreateAccount = () => {
    this.setState({
      loading: true
    });
    request.post(
      {
        url: CREATE_ACCOUNT_API,
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
            createAccountError: false,
            dialogueOpen: true
          });
        } else {
          this.setState({
            loading: false,
            createAccountError: true
          });
        }
      }.bind(this)
    );
  };

  render() {
    if (this.state.homeRedirect) {
      return <Redirect push to="/home" />;
    }

    if (this.state.loginRedirect) {
      return <Redirect push to="/login" />;
    }

    const errorMessage = (
      <Typography id="error">
        {" "}
        Unable to create account. Please try again.
      </Typography>
    );

    const dialogue = (
      <Dialog
        open={this.state.dialogueOpen}
        onClose={this.handleHomeRedirect}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Your account was created successfully.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={this.handleHomeRedirect} autoFocus>
            Continue
          </Button>
        </DialogActions>
      </Dialog>
    );

    return (
      <div className="Img">
        {this.state.dialogueOpen ? dialogue : null}
        <div className="grid-container">
          <div className="grid-item" />
          <div className="grid-item loginSquare">
            <div id="title">
              <span id="Corner">Corner</span>
              <span id="Stone">Stone</span>
            </div>
            <form
              className="textField"
              onSubmit={e => {
                e.preventDefault();
              }}
            >
              <TextField
                className="fieldStyle"
                label="email"
                name="email"
                type="email"
                onChange={this.handleEmailChange}
                onKeyPress={ev => {
                  if (ev.key === "Enter") {
                    this.handleCreateAccount();
                  }
                }}
              />
            </form>
            <form
              className="textField"
              onSubmit={e => {
                e.preventDefault();
              }}
            >
              <TextField
                className="fieldStyle"
                label="password"
                name="password"
                type="password"
                onChange={this.handlePasswordChange}
                onKeyPress={ev => {
                  if (ev.key === "Enter") {
                    this.handleCreateAccount();
                  }
                }}
              />
            </form>
            <Button
              id="ButtonWithoutBottomMargin"
              onClick={this.handleCreateAccount}
            >
              Create Account
            </Button>
            <Button
              id="ButtonWithBottomMargin"
              onClick={this.handleLoginRedirect}
            >
              Return to Login
            </Button>
            {this.state.createAccountError ? errorMessage : null}
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
)(CreateAccount);
