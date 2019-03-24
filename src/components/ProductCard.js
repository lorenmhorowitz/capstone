import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import PropTypes from "prop-types";
import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography/Typography";
import calculator from "../utils/calculator/calculator";
import formatter from "../utils/formatter";

const styles = {
  button: {
    color: "white",
    backgroundColor: "#f78a4d",
    height: "40px",
    margin: "auto",
    width: "75px"
  },
  brand: {
    fontWeight: "bold",
    textAlign: "center"
  },
  card: {
    height: "100%",
    width: "250px",
    marginLeft: "10px",
    marginRight: "10px",
    marginTop: "20px"
  },
  cost: {
    textAlign: "center",
    marginTop: 30
  },
  description: {
    fontSize: 12,
    height: "5em",
    textAlign: "center"
  },
  media: {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    height: "150px",
    width: "150px"
  },
  title: {
    fontWeight: "bold",
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
          <CardContent>
            <Typography className={classes.title}>
              {this.props.productTitle}
            </Typography>
          </CardContent>
          <CardMedia
            className={classes.media}
            component="img"
            image={this.props.productImage}
            title={this.props.productTitle}
          />
          <CardContent>
            <Typography className={classes.brand}>
              {this.props.brand}
            </Typography>
            <Typography className={classes.description}>
              {this.props.description}
            </Typography>
            <div className={classes.cost}>
              <Typography>Quantity: {this.props.quantity}</Typography>{" "}
              <Typography>
                Cost: ${formatter.format(this.props.cost)} each
              </Typography>
              <Typography>
                Subtotal: $
                {formatter.format(
                  calculator.getSubtotal(this.props.cost, this.props.quantity)
                )}
              </Typography>
            </div>
          </CardContent>
          <div>
            <p />
          </div>
        </CardActionArea>
      </Card>
    );
  }
}

ProductCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ProductCard);
