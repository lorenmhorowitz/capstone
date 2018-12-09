import { addressFormatter } from "./addressFormatter";
import CardSlide from "../components/CardSlide";
import Divider from "@material-ui/core/Divider";
import GoogleMap from "../components/GoogleMap";
import Grid from "@material-ui/core/Grid";
import React, { Component, Fragment } from "react";
import Typography from "@material-ui/core/Typography";

import "../css/job.css";

class Information extends Component {
  render() {
    const { jobDetails } = this.props;

    const formattedAddress = addressFormatter(
      jobDetails.location_city,
      jobDetails.location_region,
      jobDetails.location_postal_code
    );
    const googleMapsAddress =
      formattedAddress !== ""
        ? `${jobDetails.location_line_1} ${formattedAddress}`
        : "Vancouver, WA";

    return (
      <Fragment>
        <Grid container style={{ paddingTop: "2em" }}>
          <Grid item xs={4}>
            <div id="grid1">
              <Typography id="title1">Address:</Typography>
              <Divider id="bar2" />
              <Typography id="content">{jobDetails.location_line_1}</Typography>
              <Typography id="content">{formattedAddress}</Typography> <p />
              <Typography id="title1">Client:</Typography>
              <Divider id="bar2" />
              <Typography id="content">{jobDetails.name}</Typography> <p />
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
                  <CardSlide
                    images={jobDetails.images}
                    width={"100%"}
                    height={"100%"}
                  />
                </div>
              </Grid>
              <Grid item>
                <div id="map">
                  <GoogleMap
                    location={googleMapsAddress}
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
