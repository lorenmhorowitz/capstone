import React, { Component } from "react";
import AppBar from "./Components/AppBar";

class Home extends Component {
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
    const buttons = ["Logout"];
    if (this.state.redirect) {
      alert("Logout was pressed");
    }
    return (
      <div>
        <AppBar buttons={buttons} auth={true} handler={this.clickHandler} />
      </div>
    );
  }
}

export default Home;
