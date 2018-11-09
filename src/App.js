import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./home/Home";
import HoverLogin from "./Login/Hover/HoverLogin";
import Login from "./login/Login";
import PageNotFound from "./PageNotFound/PageNotFound";
import "./css/App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/hover" component={HoverLogin} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/home" component={Home} />
          <Redirect exact from="/" to="/login" />
          <Route component={PageNotFound} />
        </Switch>
      </div>
    );
  }
}

export default App;
