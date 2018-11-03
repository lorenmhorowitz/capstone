import React, { Component } from "react";
import { Switch, Route, BrowserRouter, Redirect } from "react-router-dom";
import HoverLogin from "./Login/Hover/HoverLogin";
import Login from "./Login/Login";
import "./css/App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route path="/hover" component={HoverLogin} />
            <Route path="/login" component={Login} />
            <Redirect exact from="/" to="/login" />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
