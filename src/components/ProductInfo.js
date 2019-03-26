import Button from "@material-ui/core/Button";
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
  minusButton: {
    backgroundColor: "white",
    "&:hover": {
      backgroundColor: "white"
    },
    maxHeight: "40px",
    maxWidth: "40px",
    minHeight: "40px",
    minWidth: "40px"
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
  plusButton: {
    backgroundColor: "white",
    "&:hover": {
      backgroundColor: "white"
    },
    marginLeft: "10px",
    maxHeight: "40px",
    maxWidth: "40px",
    minHeight: "40px",
    minWidth: "40px"
  },
  price: {
    fontSize: 20,
    marginLeft: "10px",
    marginRight: "10px",
    marginTop: "6px"
  },
  quantityContainer: {
    display: "flex",
    marginLeft: "10px",
    paddingTop: "10px"
  },
  quantityField: {
    backgroundColor: "white",
    fontSize: 20,
    fontWeight: "bold",
    height: "30px",
    paddingLeft: "10px",
    width: "30px"
  },
  quantityTitle: {
    fontSize: 24,
    marginLeft: "10px",
    marginTop: "30px"
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "center"
  }
};

class ProductInfo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentQuantity: this.props.quantity
    };
  }

  componentWillMount() {
    console.log("mounting new modal");
    this.setState({
      currentQuantity: this.props.quantity
    });
  }

  decreaseQuantity = () => {
    if (this.state.currentQuantity !== 0) {
      this.setState({ currentQuantity: this.state.currentQuantity - 1 });
    }
  };

  addQuantity = () => {
    this.setState({ currentQuantity: this.state.currentQuantity + 1 });
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
        <Typography className={classes.title}>{this.props.brand}</Typography>
        <Typography className={classes.name}>{this.props.name}</Typography>
        <Typography className={classes.model}>
          Model: {this.props.model}
        </Typography>
        <Typography className={classes.itemID}>
          Id: {this.props.itemID == undefined ? "N/A" : this.props.itemID}
        </Typography>
        <Typography className={classes.price}>
          Weight: {this.props.weight}
        </Typography>
        <Typography className={classes.quantityTitle}> Quantity</Typography>
        <div className={classes.quantityContainer}>
          <Button
            variant="outlined"
            onClick={this.decreaseQuantity}
            className={classes.minusButton}
          >
            -
          </Button>
          <Typography align="center" className={classes.quantityField}>
            {this.state.currentQuantity}
          </Typography>
          <Button
            variant="outlined"
            onClick={this.addQuantity}
            className={classes.plusButton}
          >
            +
          </Button>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(ProductInfo);
