import "../css/PageNotFound.css";
import Button from "@material-ui/core/Button";
import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import Typography from "@material-ui/core/Typography/Typography";

class PageNotFound extends Component {
  state = {
    redirectToLogin: false
  };

  handleLoginRedirect = () => {
    this.setState({
      redirectToLogin: true
    });
  };

  render() {
    if (this.state.redirectToLogin) {
      return <Redirect push to={"/login"} />;
    }

    return (
      <div className="Img">
        <div className="loginSquare">
          <div id="title">
            <span id="Corner">Corner</span>
            <span id="Stone">Stone</span>
          </div>
          <div id="pageNotFound">
            <Typography variant="h3" style={{ color: "white" }}>
              Page Not Found
            </Typography>
          </div>
          <div className="pageNotFound">
            <p />
            <Button
              id="returnToLogin"
              onClick={() => this.handleLoginRedirect()}
            >
              Return to Login Page
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default PageNotFound;
