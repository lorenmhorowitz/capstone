import "./css/App.css";
import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Checkout from "./Checkout/Checkout";
import CreateAccount from "./CreateAccount/CreateAccount";
import Home from "./Home/Home";
import HoverLogin from "./Login/Hover/HoverLogin";
import Job from "./Job/Job";
import Login from "./Login/Login";
import PageNotFound from "./PageNotFound/PageNotFound";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/hover" component={HoverLogin} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/createaccount" component={CreateAccount} />
          <Route exact path="/home" component={Home} />
          <Route path="/job/:id/checkout" component={Checkout} />
          <Route path="/job/:id" component={Job} />
          <Redirect exact from="/" to="/login" />
          <Route component={PageNotFound} />
        </Switch>
      </div>
    );
  }
}

export default App;
