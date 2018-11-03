import React, { Component } from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import HoverLogin from "./Login/Hover/HoverLogin";
import "./css/App.css";
import Login from "./login/Login";

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/hover" component={HoverLogin} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
