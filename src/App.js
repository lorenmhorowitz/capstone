import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./Home/Home";
import HoverLogin from "./Login/Hover/HoverLogin";
import Login from "./Login/Login";
import PageNotFound from "./PageNotFound/PageNotFound";
import "./css/App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/hover" component={HoverLogin} />
          <Route path="/login" component={Login} />
          <Route path="/home" component={Home} />
          <Redirect exact from="/" to="/login" />
          <Route component={PageNotFound} />
        </Switch>
      </div>
    );
  }
}

export default App;
