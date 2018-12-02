import React, { Component } from "react";
import AppBar from "../components/AppBar";
import Loading from "../components/Loading";
import SideBar from "../components/SideBar";
import CardSlide from "../components/CardSlide";
import Grid from "@material-ui/core/Grid";
import "../css/job.css";

class Job extends Component {
  state = {
    loading: true
  };
  render() {
    const images = [
      "https://pmcvariety.files.wordpress.com/2018/07/bradybunchhouse_sc11.jpg?w=1000&h=563&crop=1",
      "https://pmcvariety.files.wordpress.com/2018/07/bradybunchhouse_sc_fi.jpg?w=700&h=393&crop=1"
    ];
    return (
      <div>
        <div>
          <AppBar />
        </div>
        <Grid container id="grid">
          <Grid item id="grid1">
            <div id="font1">2910 NE 168th Ave</div>
            <div id="font1">Vancouver, WA 98682</div>
            <div id="font2">Arnold Castro</div>
            <div id="font2">(360) 123-4567</div>
            <div id="font2">test@wsu.edu</div>
          </Grid>
          <Grid item id="grid2">
            <div className="picture">
              <CardSlide images={images} width={750} height={450} />
            </div>
          </Grid>
        </Grid>

        {this.state.loading ? <Loading /> : null}

        <SideBar />
      </div>
    );
  }
}

export default Job;
