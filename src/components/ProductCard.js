import calculator from "../utils/calculator/calculator";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import formatter from "../utils/formatter";
import ProductModal from "./ProductModal";
import PropTypes from "prop-types";
import React, { Component } from "react";
import Typography from "@material-ui/core/Typography/Typography";
import WarningModal from "./WarningModal";
import { withStyles } from "@material-ui/core/styles";

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
  modal: {
    background: "white",
    outline: "none",
    height: "75%",
    margin: "auto",
    marginTop: "5%",
    padding: "10px",
    width: "75%"
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
      defaultQuantity: this.props.quantity,
      modal: {},
      presentWarningModal: false,
      price: 0,
      open: false,
      quantity: this.props.quantity
    };
  }

  showModal = () => {
    this.setState({ open: true });
  };

  showWarningModal = () => {
    this.setState({ presentWarningModal: true });
  };

  onSave = () => {
    this.setState({
      defaultQuantity: this.state.quantity,
      open: false,
      presentWarningModal: false
    });
    this.props.updateJob(this.state.quantity, this.props.itemID);
  };

  onCancel = () => {
    this.setState({
      open: false,
      presentWarningModal: false,
      quantity: this.state.defaultQuantity
    });
  };

  onClose = () => {
    this.setState({ open: false });
  };

  closeWarningLabel = () => {
    this.setState({ presentWarningModal: false });
  };

  updateQuantity = quantity => {
    this.setState({
      quantity: quantity
    });
  };

  render() {
    const { classes } = this.props;
    return (
      <Card className={classes.card}>
        <CardActionArea onClick={this.showModal}>
          <CardContent>
            <Typography className={classes.title}>
              {this.props.productTitle}
            </Typography>
          </CardContent>
          <CardMedia
            className={classes.media}
            component="img"
            image={this.props.image}
            title={this.props.title}
          />
          <CardContent>
            <Typography className={classes.brand}>
              {this.props.brand}
            </Typography>
            <Typography className={classes.description}>
              {this.props.name}
            </Typography>
            <div className={classes.cost}>
              <Typography>Quantity: {this.state.quantity}</Typography>{" "}
              <Typography>
                Cost: ${formatter.money(this.props.price)} each
              </Typography>
              <Typography>
                Subtotal: $
                {formatter.money(
                  calculator.getSubtotal(this.props.price, this.props.quantity)
                )}
              </Typography>
            </div>
          </CardContent>
          <div>
            <p />
          </div>
        </CardActionArea>
        <div>
          <ProductModal
            brand={this.props.brand}
            defaultQuantity={this.state.defaultQuantity}
            image={this.props.image}
            itemID={this.props.itemID}
            model={this.props.model}
            name={this.props.name}
            open={this.state.open}
            onSave={this.onSave}
            onCancel={this.onCancel}
            onClose={this.onClose}
            otherProducts={this.props.otherProducts}
            price={this.props.price}
            quantity={this.state.quantity}
            roofingQuantity={this.props.roofingQuantity}
            sendDefaultQuantity={this.sendDefaultQuantity}
            showWarningModal={this.showWarningModal}
            updateQuantity={this.updateQuantity}
            weight={this.props.weight}
          />
        </div>
        <div>
          <WarningModal
            open={this.state.presentWarningModal}
            onCancel={this.onCancel}
            onClose={this.closeWarningLabel}
            onSave={this.onSave}
          />
        </div>
      </Card>
    );
  }
}

ProductCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ProductCard);
