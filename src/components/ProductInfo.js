import Paper from "@material-ui/core/Paper";
import PropTypes from "prop-types";
import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  container: {
    height: "90%"
  },
  itemID: {
    fontSize: 20,
    marginLeft: "10px",
    marginRight: "10px",
    marginTop: "6px"
  },
  model: {
    fontSize: 20,
    marginLeft: "10px",
    marginRight: "10px",
    marginTop: "20px"
  },
  name: {
    fontSize: 20,
    marginLeft: "10px",
    marginRight: "10px"
  },
  price: {
    fontSize: 20,
    marginLeft: "10px",
    marginRight: "10px",
    marginTop: "6px"
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "center"
  }
};

function ProductInfo(props) {
  const { classes } = props;

  return (
    <div>
      <Typography className={classes.title}>{props.title}</Typography>
      <Typography className={classes.name}>{props.name}</Typography>
      <Typography className={classes.model}>Model: {props.model}</Typography>
      <Typography className={classes.itemID}>
        Id: {props.itemID == undefined ? "N/A" : props.itemID}
      </Typography>
      <Typography className={classes.price}>Weight: {props.weight}</Typography>
    </div>
  );
}

export default withStyles(styles)(ProductInfo);
