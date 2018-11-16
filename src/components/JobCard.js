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
    maxWidth: 300
  },
  media: {
    objectFit: "cover"
  }
};

class ImgMediaCard extends Component {
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
            <Typography gutterBottom variant="h5" component="h2">
              House
            </Typography>
            <Typography component="p">You like this house</Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    );
  }
}

ImgMediaCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ImgMediaCard);
