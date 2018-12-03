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
          <Typography variant="h4">Job Information</Typography>
          <Divider />
          <div>
            <Information />
            <p />
          </div>

          <Typography variant="h4">Roofing Information</Typography>
          <Divider />
          <div>
            <p />
          </div>

          <Typography variant="h4">Siding Information</Typography>
          <Divider />
          <div>
            <p />
          </div>

          <Typography variant="h4">Windows Information</Typography>
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
