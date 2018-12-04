import React, { Component } from "react";
import AppBar from "../components/AppBar";
import Divider from "@material-ui/core/Divider";
import Information from "./Information";
import Loading from "../components/Loading";
import SideBar from "../components/SideBar";
import Typography from "@material-ui/core/Typography";

import "../css/job.css";

class Job extends Component {
  state = {
    loading: true
  };
  render() {
    return (
      <div>
        <AppBar />
        <div id="mainWindow">
          <Typography id="header">Job Information</Typography>
          <Divider />
          <div>
            <Information />
            <p />
          </div>

          <Typography id="header">Roofing Information</Typography>
          <Divider />
          <div>
            <p />
          </div>

          <Typography id="header">Siding Information</Typography>
          <Divider />
          <div>
            <p />
          </div>

          <Typography id="header">Windows Information</Typography>
          <Divider />
          <div />
        </div>
        {this.state.loading ? <Loading /> : null}
        <SideBar id="sideBar" />
      </div>
    );
  }
}

export default Job;
