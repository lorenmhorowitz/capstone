import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  container: {
    display: "inline-block",
    paddingRight: "8px",
    height: "19%",
    width: "19%"
  },
  image: {
    display: "block",
    height: "40%",
    marginLeft: "auto",
    marginRight: "auto",
    paddingBottom: "10px",
    width: "40%"
  },
  title: {
    textAlign: "center"
  }
};

class ProductBox extends Component {
  switchProduct = () => {
    this.props.onChange(this.props.product, this.props.quantity);
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.container}>
        <Card>
          <CardActionArea onClick={this.switchProduct}>
            <Typography className={classes.title}>
              {this.props.product.brand}
            </Typography>
            <img
              className={classes.image}
              src={this.props.product.image}
              alt=""
            />
          </CardActionArea>
        </Card>
      </div>
    );
  }
}

export default withStyles(styles)(ProductBox);
