import React, { Component } from "react";
import "../css/Login.css";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

class Login extends Component {
  render() {
    return (
      <div className="Img">
        <div id="loginSquare">
          <div id="title">
            <span id="Corner">Corner</span>
            <span id="Stone">Stone</span>
          </div>
          <div id="Info">
            Please log in with your Hover credentials using the buttom below.
          </div>
          <form>
            <TextField id="field" label="email" />
          </form>
          <TextField
            id="field"
            margin="normal"
            variant="outlined"
            name="email"
            label="email"
          />
          <Button id="Login">Log In</Button>
          <Button id="HoverLogin">Login With Hover</Button>
        </div>
      </div>
    );
  }
}

export default Login;
