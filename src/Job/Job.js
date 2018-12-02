import React, { Component } from "react";
import AppBar from "../components/AppBar";
import Loading from "../components/Loading";
import SideBar from "../components/SideBar";

class Job extends Component {
  state = {
    loading: true
  };

  render() {
    return (
      <div>
        <AppBar />
        {this.state.loading ? <Loading /> : null}
        <SideBar />
      </div>
    );
  }
}

export default Job;
