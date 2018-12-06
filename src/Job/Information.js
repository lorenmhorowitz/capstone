import CardSlide from "../components/CardSlide";
import Divider from "@material-ui/core/Divider";
import GoogleMap from "../components/GoogleMap";
import Grid from "@material-ui/core/Grid";
import React, { Component, Fragment } from "react";
import Typography from "@material-ui/core/Typography";

import "../css/job.css";

class Information extends Component {
  render() {
    const images = [
      "https://pmcvariety.files.wordpress.com/2018/07/bradybunchhouse_sc11.jpg?w=1000&h=563&crop=1",
      "https://pmcvariety.files.wordpress.com/2018/07/bradybunchhouse_sc_fi.jpg?w=700&h=393&crop=1"
    ];
    return (
      <Fragment>
        <Grid container style={{ paddingTop: "2em" }}>
          <Grid item xs={4}>
            <div id="grid1">
              <Typography id="title1">Address:</Typography>
              <Divider id="bar2" />
              <Typography id="content">2910 NE 168th Ave</Typography>
              <Typography id="content">Vancouver, WA 98682</Typography> <p />
              <Typography id="title1">Client:</Typography>
              <Divider id="bar2" />
              <Typography id="content">Arnold Castro</Typography> <p />
              <Typography id="title1">Contact Information: </Typography>
              <Divider id="bar2" />
              <Typography id="content">(360) 123-4567</Typography>
              <Typography id="content">test@wsu.edu</Typography>
            </div>
          </Grid>
          <Grid item xs={8}>
            <Grid container>
              <Grid item>
                <div id="picture">
                  <CardSlide images={images} width={"100%"} height={"100%"} />
                </div>
              </Grid>
              <Grid item>
                <div id="map">
                  <GoogleMap
                    location="Las Vegas, NV"
                    height="100%"
                    width="100%"
                  />
                </div>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Fragment>
    );
  }
}

export default Information;
