import "../css/home.css";
import AppBar from "../components/AppBar";
import { connect } from "react-redux";
import { Grid } from "@material-ui/core";
import JobCard from "../components/JobCard";
import Loading from "../components/Loading";
import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import request from "request";

const mapStateToProps = state => {
  return {
    signedIn: state.auth.signedIn
  };
};

const mapDispatchToProps = dispatch => ({});

const JOBSURL = "https://us-central1-hdqc-capstone.cloudfunctions.net/getJobs";

class Home extends Component {
  state = {
    dataArr: [],
    isLoaded: false,
    jobRedirect: false,
    jobRedirectID: 0,
    loading: true
  };

  handleJobRedirect = (data, event) => {
    this.setState({
      jobRedirect: true,
      jobRedirectID: data
    });
  };

  render() {
    // Redirect to Login page if not signed in.
    if (!this.props.signedIn) {
      return <Redirect push to={"/login"} />;
    }

    if (!this.state.isLoaded) {
      request.post(
        {
          url: JOBSURL,
          headers: {
            "Content-Type": "application/json"
          },
          json: true,
          body: {
            key: this.props.signedIn,
            kind: "jobs"
          }
        },
        (error, response, body) => {
          this.setState({
            dataArr: JSON.parse(body.jobs).results,
            isLoaded: true,
            loading: false
          });
        }
      );
    }

    if (this.state.jobRedirect) {
      return <Redirect push to={"/job/" + this.state.jobRedirectID} />;
    }
    return (
      <div>
        <AppBar />
        {this.state.loading ? <Loading /> : null}
        <div className="gridContainer">
          <Grid container justify="center" spacing={16}>
            {this.state.dataArr.map(data => (
              <JobCard
                key={data.id}
                jobId={data.id}
                name={data.name}
                location_line_1={data.location_line_1}
                location_city={data.location_city}
                location_region={data.location_region}
                image={data.images[0]}
                clickHandler={this.handleJobRedirect}
              />
            ))}
          </Grid>
        </div>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
