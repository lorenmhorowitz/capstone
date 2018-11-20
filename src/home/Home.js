import React, { Component } from "react";
import AppBar from "../components/AppBar";
import Loading from "../components/Loading";
import SideBar from "../components/SideBar";

class Home extends Component {
  state = {
    loading: true
  };

  render() {
    return (
      <div>
        <AppBar />
        <SideBar />
        {this.state.loading ? <Loading /> : null}
      </div>
    );
  }
}

export default Home;
