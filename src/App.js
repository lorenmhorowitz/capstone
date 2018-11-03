import React, { Component } from "react";
import "./css/App.css";
import Login from "./login/Login";

class App extends Component {
  render() {
    return (
      <div className="img">
        <Login />
      </div>
    );
  }
}

export default App;
