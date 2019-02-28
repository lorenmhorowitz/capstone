import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import PropTypes from "prop-types";
import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography/Typography";

const styles = {
  button: {
    color: "white",
    backgroundColor: "#f78a4d",
    height: "40px",
    margin: "auto",
    width: "75px"
  },
  card: {
    height: "350px",
    width: "350px"
  },
  media: {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    height: "150px",
    width: "150px"
  },
  title: {
    textAlign: "center"
  }
};

class ProductCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 0,
      price: 0
    };
  }

  render() {
    const { classes } = this.props;
    return (
      <Card className={classes.card}>
        <CardActionArea>
          <CardContent className={classes.title}>
            <Typography>{this.props.productTitle}</Typography>
          </CardContent>
          <CardMedia
            className={classes.media}
            component="img"
            image={this.props.productImage}
            title={this.props.productTitle}
          />
          <CardContent>
            <Typography>{this.props.description}</Typography>
          </CardContent>
        </CardActionArea>
        <div className={classes.button}>
          <Button
            style={{ color: "black", fontSize: "10px", width: 75, height: 40 }}
          >
            Buy now
          </Button>
        </div>
      </Card>
    );
  }
}

ProductCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ProductCard);
