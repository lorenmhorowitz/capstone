import React, { Component } from "react";
import HeaderBar from "./Components/AppBar";

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
        <HeaderBar buttons={buttons} handler={this.clickHandler} />
      </div>
    );
  }
}

export default Home;
