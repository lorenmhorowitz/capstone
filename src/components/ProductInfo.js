import Button from "@material-ui/core/Button";
import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";

const styles = {
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
    fontSize: 18,
    marginLeft: "10px",
    marginRight: "10px",
    marginTop: "10px"
  },
  name: {
    fontSize: 18,
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
    fontSize: 18,
    marginLeft: "10px",
    marginRight: "10px",
    marginTop: "15px"
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
    width: "10%"
  },
  quantityTitle: {
    fontSize: 21,
    marginLeft: "10px",
    marginTop: "20px"
  },
  subtotal: {
    fontSize: 18,
    marginLeft: "10px",
    marginRight: "10px",
    marginTop: "10px"
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginTop: "-20px",
    textAlign: "center"
  },
  weight: {
    fontSize: 18,
    marginLeft: "10px",
    marginRight: "10px",
    marginTop: "6px"
  }
};

class ProductInfo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentQuantity: this.props.quantity,
      subtotal: this.props.price * this.props.quantity
    };
  }

  componentWillMount() {
    this.setState({
      currentQuantity: this.props.quantity
    });
  }

  decreaseQuantity = () => {
    if (this.props.quantity === 0) {
      return;
    }
    this.props.decreaseQuantity();
    this.setState({
      subtotal: this.props.price * this.props.quantity - this.props.price
    });
  };

  addQuantity = () => {
    this.props.addQuantity();
    this.setState({
      subtotal: this.props.price * this.props.quantity + this.props.price
    });
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
          Id: {this.props.itemID === undefined ? "N/A" : this.props.itemID}
        </Typography>
        <Typography className={classes.weight}>
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
            {this.props.quantity}
          </Typography>
          <Button
            variant="outlined"
            onClick={this.addQuantity}
            className={classes.plusButton}
          >
            +
          </Button>
        </div>
        <Typography className={classes.price}>
          Price per unit: ${this.props.price}
        </Typography>
        <Typography className={classes.subtotal}>
          Subtotal: ${this.props.subtotal.toFixed(2)}
        </Typography>
      </div>
    );
  }
}

export default withStyles(styles)(ProductInfo);
