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
    const images = [
      "https://pmcvariety.files.wordpress.com/2018/07/bradybunchhouse_sc11.jpg?w=1000&h=563&crop=1",
      "https://pmcvariety.files.wordpress.com/2018/07/bradybunchhouse_sc_fi.jpg?w=700&h=393&crop=1"
    ];

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
              <Typography variant="subtitle1">Address:</Typography>
              <Divider style={{ color: "orange" }} />
              <Typography variant="h6">{jobDetails.location_line_1}</Typography>
              <Typography variant="h6">{formattedAddress}</Typography> <p />
              <Typography variant="subtitle1">Client:</Typography>
              <Divider />
              <Typography variant="h6">{jobDetails.name}</Typography> <p />
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
