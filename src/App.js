import React, { Component } from "react";
import "./css/App.css";
import Sidebar from "./Components/Sidebar";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Sidebar />
      </div>
    );
  }
}

export default App;
