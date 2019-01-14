import AppBar from "../components/AppBar";
import { Grid } from "@material-ui/core";
import JobCard from "../components/JobCard";
import Loading from "../components/Loading";
import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import request from "request";
import store from "../redux/reducers";
import "../css/home.css";

const JOBSURL = "https://us-central1-hdqc-capstone.cloudfunctions.net/getJobs";

class Home extends Component {
  state = {
    loading: true,
    dataArr: [],
    jobRedirect: false,
    jobRedirectID: 0
  };

  checkAuth = () => {
    if (
      store.getState().account.length === 0 ||
      store.getState().account.isLoggedIn === false
    ) {
      return <Redirect to="/login" />;
    }
  };

  handleJobRedirect = (data, event) => {
    this.setState({
      jobRedirect: true,
      jobRedirectID: data
    });
  };

  UNSAFE_componentWillMount() {
    request.post(
      {
        url: JOBSURL,
        headers: {
          "Content-Type": "application/json"
        },
        json: true,
        body: {
          key: "username",
          kind: "jobs",
          namespace: "username"
        }
      },
      (error, response, body) => {
        this.setState({
          dataArr: JSON.parse(body.jobs).results,
          loading: false
        });
      }
    );
  }

  render() {
    if (this.state.jobRedirect) {
      return <Redirect push to={"/job/" + this.state.jobRedirectID} />;
    }
    return (
      <div>
        {this.checkAuth()}
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

export default Home;
