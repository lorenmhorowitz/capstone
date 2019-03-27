import Modal from "@material-ui/core/Modal";
import ProductBox from "./ProductBox";
import ProductInfo from "./ProductInfo";
import PropTypes from "prop-types";
import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import "../css/Modal.css";

const styles = {
  box: {
    height: "20%",
    width: "20%"
  },
  brand: {
    fontSize: 22,
    fontWeight: "bold",
    marginTop: "2%",
    marginLeft: "18%"
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
    marginTop: "2%",
    width: "50%"
  },
  otherProducts: {
    clear: "both",
    height: "100%",
    overflow: "hidden",
    paddingLeft: "10px",
    paddingTop: "40px",
    width: "100%"
  }
};

class ProductModal extends Component {
  constructor(props) {
    super(props);

    let product = {
      brand: this.props.brand,
      currentQuantity: this.props.quantity,
      image: this.props.image,
      itemID: this.props.itemID,
      model: this.props.model,
      name: this.props.name,
      price: this.props.price,
      quantity: this.props.quantity,
      subtotal: this.props.price * this.props.quantity,
      weight: this.props.weight
    };

    this.state = {
      brand: this.props.brand,
      currentQuantity: this.props.quantity,
      image: this.props.image,
      initProduct: product,
      itemID: this.props.itemID,
      model: this.props.model,
      name: this.props.name,
      price: this.props.price,
      quantity: this.props.quantity,
      subtotal: this.props.price * this.props.quantity,
      weight: this.props.weight
    };
  }

  addQuantity = () => {
    this.setState({
      currentQuantity: this.state.currentQuantity + 1,
      subtotal: (this.state.currentQuantity + 1) * this.state.price
    });
  };

  changeModal = (obj, quantity) => {
    this.setState({
      brand: obj.brand,
      currentQuantity: quantity,
      image: obj.image,
      itemID: obj.item_id,
      model: obj.model,
      name: obj.name,
      price: obj.price,
      quantity: quantity,
      subtotal: quantity * obj.price,
      weight: obj.weight
    });
  };

  closeModal = () => {
    this.setState({
      brand: this.state.initProduct.brand,
      image: this.state.initProduct.image,
      itemID: this.state.initProduct.itemID,
      model: this.state.initProduct.model,
      name: this.state.initProduct.name,
      price: this.state.initProduct.price,
      quantity: this.state.quantity,
      weight: this.state.initProduct.weight
    });
    this.props.onClose();
  };

  decreaseQuantity = () => {
    this.setState({
      currentQuantity: this.state.currentQuantity - 1,
      subtotal: (this.state.currentQuantity - 1) * this.state.price
    });
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
        if (this.props.roofingQuantity === undefined) {
          quantity = this.props.quantity;
        } else {
          quantity = this.props.roofingQuantity[category];
        }

        if (
          this.state.itemID !==
          otherProducts[category][product].products[0].item_id
        ) {
          productList.push(
            <ProductBox
              key={index++}
              onChange={this.changeModal}
              product={otherProducts[category][product].products[0]}
              quantity={quantity}
              className={classes.box}
            />
          );
        }

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
        <div id="modal" className={classes.modal}>
          <div className={classes.container}>
            <div className={classes.imageContainer}>
              <img className={classes.image} src={this.state.image} alt="" />
            </div>
            <div className={classes.productInfo}>
              <ProductInfo
                addQuantity={this.addQuantity}
                brand={this.state.brand}
                decreaseQuantity={this.decreaseQuantity}
                itemID={this.state.itemID}
                model={this.state.model}
                name={this.state.name}
                price={this.state.price}
                quantity={this.state.currentQuantity}
                subtotal={this.state.subtotal}
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
