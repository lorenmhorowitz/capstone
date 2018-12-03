import React, { Component } from "react";
import request from "request";
import AppBar from "../components/AppBar";
import Loading from "../components/Loading";
import "../css/home.css";
import { Grid } from "@material-ui/core";
import JobCard from "../components/JobCard";

const JOBSURL = "https://us-central1-hdqc-capstone.cloudfunctions.net/getJobs";

//This is a comment

class Home extends Component {
  state = {
    loading: true,
    dataArr: []
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
    return (
      <div>
        <AppBar />
        {this.state.loading ? <Loading /> : null}
        <div className="gridContainer">
          <Grid container justify="center" spacing={16}>
            {this.state.dataArr.map(data => (
              <JobCard
                key={data.id}
                name={data.name}
                location_line_1={data.location_line_1}
                location_city={data.location_city}
                location_region={data.location_region}
                image="https://upload.wikimedia.org/wikipedia/commons/2/25/Houses_on_Garfield_Place,_Poughkeepsie,_NY.jpg"
              />
            ))}
          </Grid>
        </div>
      </div>
    );
  }
}

export default Home;
