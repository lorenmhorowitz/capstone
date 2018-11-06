import React, { Component } from "react";
import "../css/Login.css";
import Button from "@material-ui/core/Button";
import TextField from "../components/TextField";

class Login extends Component {
  render() {
    return (
      <div className="Img">
        <div id="loginSquare">
          <div id="title">
            <span id="Corner">Corner</span>
            <span id="Stone">Stone</span>
          </div>
          <TextField label="email" />
          <TextField label="password" />
          <Button id="Login">Log In</Button>
          <Button id="HoverLogin">Login With Hover</Button>
        </div>
      </div>
    );
  }
}

export default Login;
