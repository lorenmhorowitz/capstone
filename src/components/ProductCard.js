import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import ProductModal from "./ProductModal";
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
  brand: {
    fontWeight: "bold",
    textAlign: "center"
  },
  card: {
    height: "100%",
    width: "250px",
    marginLeft: "10px",
    marginRight: "10px",
    marginTop: "10px"
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
      quantity: 0,
      price: 0,
      open: false
    };
  }

  showModal = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Card className={classes.card}>
          <CardActionArea onClick={this.showModal}>
            <CardContent>
              <Typography className={classes.title}>
                {this.props.title}
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
                <Typography>
                  Cost: ${this.props.price} Quantity: {this.props.quantity}
                </Typography>
              </div>
            </CardContent>
            <div>
              <p />
            </div>
          </CardActionArea>
        </Card>
        <ProductModal
          image={this.props.image}
          itemID={this.props.itemID}
          model={this.props.model}
          name={this.props.name}
          open={this.state.open}
          onClose={this.handleClose}
          otherProducts={this.props.otherProducts}
          price={this.props.price}
          quantity={this.props.quantity}
          title={this.props.brand}
          weight={this.props.weight}
        />
      </div>
    );
  }
}

ProductCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ProductCard);
