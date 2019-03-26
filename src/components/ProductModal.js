import calculator from "../utils/calculator/calculator";
import Modal from "@material-ui/core/Modal";
import ProductBox from "./ProductBox";
import ProductInfo from "./ProductInfo";
import PropTypes from "prop-types";
import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  box: {
    height: "20%",
    width: "20%"
  },
  image: {
    height: "90%",
    marginLeft: "5px",
    marginTop: "20px",
    marginRight: "auto",
    width: "90%"
  },
  imageContainer: {
    float: "left",
    height: "40%",
    width: "40%"
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
  name: {
    fontSize: 20,
    marginTop: "3%",
    marginLeft: "10px",
    width: "50%"
  },
  price: {
    fontSize: 26,
    fontWeight: "bold"
  },
  productInfo: {
    float: "left",
    height: "100%",
    marginLeft: "30px",
    marginTop: "30px",
    width: "50%"
  },
  brand: {
    fontSize: 22,
    fontWeight: "bold",
    marginTop: "2%",
    marginLeft: "18%"
  },
  otherProducts: {
    clear: "both",
    height: "100%",
    paddingLeft: "10px",
    paddingTop: "40px",
    width: "100%"
  }
};

class ProductModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      brand: "",
      image: "",
      initProduct: {},
      itemID: "",
      model: "",
      name: "",
      price: "",
      quantity: "",
      weight: ""
    };
  }

  componentWillMount() {
    let product = {
      brand: this.props.brand,
      image: this.props.image,
      itemID: this.props.itemID,
      model: this.props.model,
      name: this.props.name,
      price: this.props.price,
      quantity: this.props.quantity,
      weight: this.props.weight
    };

    this.setState({
      brand: this.props.brand,
      image: this.props.image,
      initProduct: product,
      itemID: this.props.itemID,
      model: this.props.model,
      name: this.props.name,
      price: this.props.price,
      quantity: this.props.quantity,
      weight: this.props.weight
    });
  }

  changeModal = (obj, quantity) => {
    this.setState({
      brand: obj.brand,
      image: obj.image,
      itemID: obj.item_id,
      model: obj.model,
      name: obj.name,
      price: obj.price,
      quantity: quantity,
      weight: obj.weight
    });
  };

  closeModal = () => {
    this.setState({
      brand: this.state.initProduct.brand,
      image: this.state.initProduct.image,
      itemID: this.state.initProduct.item_id,
      model: this.state.initProduct.model,
      name: this.state.initProduct.name,
      price: this.state.initProduct.price,
      quantity: this.state.quantity,
      weight: this.state.initProduct.weight
    });
    this.props.onClose();
  };

  render() {
    const { classes } = this.props;

    let otherProducts = this.props.otherProducts;
    let index = 0;
    let productList = [];
    let foundProductModel = false;
    let modelList = [];
    let quantity;

    Object.keys(otherProducts).map(category => {
      Object.keys(otherProducts[category]).map(product => {
        if (this.props.roofingQuantity == undefined) {
          quantity = this.props.quantity;
        } else {
          quantity = this.props.roofingQuantity[category];
        }
        productList.push(
          <ProductBox
            key={index++}
            onChange={this.changeModal}
            product={otherProducts[category][product].products[0]}
            quantity={quantity}
            className={classes.box}
          />
        );

        if (
          this.props.model ===
          otherProducts[category][product].products[0].model
        ) {
          foundProductModel = true;
        }
      });

      if (foundProductModel === true) {
        modelList = productList;
        foundProductModel = false;
        productList = [];
        return;
      } else {
        productList = [];
      }
    });

    return (
      <Modal open={this.props.open} onClose={this.closeModal}>
        <div className={classes.modal}>
          <div className={classes.container}>
            <div className={classes.imageContainer}>
              <img className={classes.image} src={this.state.image} alt="" />
            </div>
            <div className={classes.productInfo}>
              <ProductInfo
                brand={this.state.brand}
                itemID={this.state.itemID}
                model={this.state.model}
                name={this.state.name}
                price={this.state.price}
                quantity={this.state.quantity}
                weight={this.state.weight}
              />
            </div>
          </div>
          <div className={classes.otherProducts}>{modelList.slice(0, 5)}</div>
        </div>
      </Modal>
    );
  }
}

ProductModal.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ProductModal);
