import React, { Component, Fragment } from "react";
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
    const loaded = (
      <div id="mainWindow">
        <Typography id="header">Job Information</Typography>
        <Divider id="bar1" />
        <div>
          <Information jobDetails={this.state.jobDetails} />
          <p />
        </div>

        {this.state.jobDetails.hasOwnProperty("active_projects") &&
        this.state.jobDetails.active_projects.roofing ? (
          <Fragment>
            <Typography id="header2">Roofing Information</Typography>
            <Divider id="bar1" />
            <div>
              <p />
            </div>
          </Fragment>
        ) : null}

        {this.state.jobDetails.hasOwnProperty("active_projects") &&
        this.state.jobDetails.active_projects.siding ? (
          <Fragment>
            <Typography id="header">Siding Information</Typography>
            <Divider id="bar1" />
            <div>
              <p />
            </div>
          </Fragment>
        ) : null}

        {this.state.jobDetails.hasOwnProperty("active_projects") &&
        this.state.jobDetails.active_projects.windows ? (
          <Fragment>
            <Typography id="header">Windows Information</Typography>
            <Divider id="bar1" />
            <div />
          </Fragment>
        ) : null}
      </div>
    );

    return (
      <div>
        <AppBar />
        {!this.state.loading &&
        this.state.jobDetails.hasOwnProperty("location_line_1")
          ? loaded
          : null}
        {!this.state.loading &&
        !this.state.jobDetails.hasOwnProperty("location_line_1") ? (
          <div id="mainWindow">
            <Typography id="title1">
              Unable to load job {window.location.pathname.replace("/job/", "")}
              .
            </Typography>
          </div>
        ) : null}

        {this.state.loading ? <Loading /> : null}
        <SideBar />
      </div>
    );
  }
}

export default Job;
