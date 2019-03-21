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
      image: "",
      initProduct: {},
      itemID: "",
      model: "",
      name: "",
      price: "",
      brand: "",
      weight: ""
    };
  }

  componentWillMount() {
    let product = {
      image: this.props.image,
      itemID: this.props.itemID,
      model: this.props.model,
      name: this.props.name,
      price: this.props.price,
      brand: this.props.brand,
      weight: this.props.weight
    };

    this.setState({
      image: this.props.image,
      initProduct: product,
      itemID: this.props.itemID,
      model: this.props.model,
      name: this.props.name,
      price: this.props.price,
      brand: this.props.brand,
      weight: this.props.weight
    });
  }

  changeModal = obj => {
    this.setState({
      image: obj.image,
      itemID: obj.itemID,
      model: obj.model,
      name: obj.name,
      price: obj.price,
      brand: obj.brand,
      weight: obj.weight
    });
  };

  closeModal = () => {
    this.setState({
      image: this.state.initProduct.image,
      itemID: this.state.initProduct.itemID,
      model: this.state.initProduct.model,
      name: this.state.initProduct.name,
      price: this.state.initProduct.price,
      brand: this.state.initProduct.brand,
      weight: this.state.initProduct.weight
    });
    this.props.onClose();
  };

  render() {
    const { classes } = this.props;

    let otherProducts = this.props.otherProducts;
    let index = 0;
    let productList = [];
    Object.keys(otherProducts).map(category => {
      Object.keys(otherProducts[category]).map(product => {
        if (
          this.props.itemID !==
          otherProducts[category][product].products[0].item_id
        ) {
          productList.push(
            <ProductBox
              key={index++}
              onChange={this.changeModal}
              product={otherProducts[category][product].products[0]}
              className={classes.box}
            />
          );
        }
      });
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
                itemID={this.state.itemID}
                model={this.state.model}
                name={this.state.name}
                price={this.state.price}
                brand={this.state.brand}
                weight={this.state.weight}
              />
            </div>
          </div>
          <div className={classes.otherProducts}>{productList.slice(0, 5)}</div>
        </div>
      </Modal>
    );
  }
}

ProductModal.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ProductModal);
