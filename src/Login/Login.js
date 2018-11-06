import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import "../css/Login.css";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false
    };
  }

  clickHandler = () => {
    this.setState({
      redirect: true
    });
  };

  render() {
    if (this.state.redirect) {
      return <Redirect push to="/hover" />;
    }

    return (
      <div className="Img">
        <div id="loginSquare">
          <button onClick={() => this.clickHandler()}>Login with Hover</button>
        </div>
      </div>
    );
  }
}

export default Login;
