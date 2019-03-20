import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";

const styles = {
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
    console.log("Yo!");
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Card>
          <CardActionArea onClick={this.switchProduct}>
            <Typography className={classes.title}>
              {this.props.productTitle}
            </Typography>
            <img className={classes.image} src={this.props.productImage} />
          </CardActionArea>
        </Card>
      </div>
    );
  }
}

export default withStyles(styles)(ProductBox);
