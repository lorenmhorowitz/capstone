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
              <Typography variant="subtitle1">Address:</Typography>
              <Divider style={{ color: "orange" }} />
              <Typography variant="h6">2910 NE 168th Ave</Typography>
              <Typography variant="h6">Vancouver, WA 98682</Typography> <p />
              <Typography variant="subtitle1">Client:</Typography>
              <Divider />
              <Typography variant="h6">Arnold Castro</Typography> <p />
              <Typography variant="subtitle1">Contact Information: </Typography>
              <Divider />
              <Typography variant="h6">(360) 123-4567</Typography>
              <Typography variant="h6">test@wsu.edu</Typography>
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
                <div
                  style={{ width: "15em", height: "12em", marginLeft: "2vw" }}
                >
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
