import React, { Component } from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import HoverLogin from "./Login/Hover/HoverLogin";
import "./css/App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" />
            <Route exact path="/hover" component={HoverLogin} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
