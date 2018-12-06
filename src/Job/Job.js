import React, { Component } from "react";
import AppBar from "../components/AppBar";
import Divider from "@material-ui/core/Divider";
import Information from "./Information";
import Loading from "../components/Loading";
import request from "request";
import SideBar from "../components/SideBar";
import Typography from "@material-ui/core/Typography";

import "../css/job.css";

const JOBURL = "https://us-central1-hdqc-capstone.cloudfunctions.net/getJob";

class Job extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jobDetails: {},
      loading: true
    };

    request.post(
      {
        url: JOBURL,
        headers: {
          "Content-Type": "application/json"
        },
        json: true,
        body: {
          key: "username",
          kind: "jobs",
          id: window.location.pathname.replace("/job/", "")
        }
      },
      (error, response, body) => {
        this.setState({
          jobDetails: { ...body },
          loading: false
        });
      }
    );
  }

  render() {
    return (
      <div>
        <AppBar />
        <div id="mainWindow">
          <Typography variant="h4">Job Information</Typography>
          <Divider />
          <div>
            <Information jobDetails={this.state.jobDetails} />
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
