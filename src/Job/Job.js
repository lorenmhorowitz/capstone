import "../css/job.css";
import AppBar from "../components/AppBar";
import { connect } from "react-redux";
import Divider from "@material-ui/core/Divider";
import Information from "./Information";
import Loading from "../components/Loading";
import ProductCard from "../components/ProductCard";
import { lorem } from "./Lorem";
import { Grid } from "@material-ui/core";
import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import request from "request";
import SideBar from "../components/SideBar";
import Typography from "@material-ui/core/Typography";

const mapStateToProps = state => {
  return {
    signedIn: state.auth.signedIn
  };
};

const mapDispatchToProps = dispatch => ({});

const topOffset = 65;
const JOBURL = "https://us-central1-hdqc-capstone.cloudfunctions.net/getJob";

class Job extends Component {
  constructor(props) {
    super(props);
    this.infoRef = React.createRef();
    this.roofingRef = React.createRef();
    this.sidingRef = React.createRef();
    this.windowsRef = React.createRef();
    this.state = {
      jobDetails: {},
      loading: true
    };

    if (this.props.signedIn) {
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
  }

  scrollToRef = ref => {
    window.scrollTo({
      top: ref.current.offsetTop - topOffset,
      behavior: "smooth"
    });
  };

  render() {
    // Redirect to Login page if not signed in.
    if (!this.props.signedIn) {
      return <Redirect push to={"/login"} />;
    }

    const loaded = (
      <div id="mainWindow">
        {/* JOB INFORMATION SECTION */}
        <div ref={this.infoRef}>
          <Typography id="header">Job Information</Typography>
        </div>
        <Divider id="bar1" />
        <Information jobDetails={this.state.jobDetails} />

        {/* ROOFING INFORMATION SECTION */}
        {this.state.jobDetails.hasOwnProperty("active_projects") &&
        this.state.jobDetails.active_projects.roofing ? (
          <div ref={this.roofingRef}>
            <Typography id="header2">Roofing Information</Typography>
            <Divider id="bar1" />
            <Grid container justify="center">
              <ProductCard />
              <ProductCard />
              <ProductCard />
            </Grid>
            <div>
              <p />
            </div>
          </div>
        ) : null}

        {/* SIDING INFORMATION SECTION */}
        {this.state.jobDetails.hasOwnProperty("active_projects") &&
        this.state.jobDetails.active_projects.siding ? (
          <div ref={this.sidingRef}>
            <Typography id="header">Siding Information</Typography>
            <Divider id="bar1" />
            <Grid container justify="center" padding={20}>
              {/*<p id="para">{lorem}</p>*/}
              <ProductCard />
              <ProductCard />
              <ProductCard />
            </Grid>
          </div>
        ) : null}

        {/* WINDOWS INFORMATION SECTION */}
        {this.state.jobDetails.hasOwnProperty("active_projects") &&
        this.state.jobDetails.active_projects.windows ? (
          <div ref={this.windowsRef}>
            <Typography id="header">Windows Information</Typography>
            <Divider id="bar1" />
            <Grid container justify="center">
              <ProductCard />
              <ProductCard />
              <ProductCard />
            </Grid>
          </div>
        ) : null}

        <div />
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
            </Typography>
          </div>
        ) : null}
        {this.state.loading ? <Loading /> : null}
        <SideBar
          scrollToRef={this.scrollToRef}
          infoRef={this.infoRef}
          roofingRef={this.roofingRef}
          sidingRef={this.sidingRef}
          windowsRef={this.windowsRef}
          id="sideBar"
        />
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Job);
