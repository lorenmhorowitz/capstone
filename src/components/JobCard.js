import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import "../css/JobCard.css";

const styles = {
  card: {
    maxWidth: "300px",
    width: "100px"
  },
  media: {}
};

class JobCard extends Component {
  render() {
    return (
      <Card className="card">
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Nice house"
            className="cardMedia"
            image={this.props.image}
            title="Nice house"
          />
          <CardContent>
            <Typography variant="subtitle2" align="left">
              {this.props.name}
            </Typography>
            <Typography variant="subtitle2" align="left">
              {this.props.location_line_1}
            </Typography>
            <Typography variant="subtitle2" align="left">
              {this.props.location_city}, {this.props.location_region}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    );
  }
}

JobCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(JobCard);
