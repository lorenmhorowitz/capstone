import React, { Component } from "react";
import AppBar from "../components/AppBar";
import GoogleMap from "../components/GoogleMap";
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
        <div style={{ position: "fixed", top: "50%", left: "50%" }}>
          <GoogleMap location="Las Vegas, NV" />
        </div>
      </div>
    );
  }
}

export default Job;
