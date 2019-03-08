import Button from "@material-ui/core/Button";
import Modal from "@material-ui/core/Modal";
import PropTypes from "prop-types";
import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  modal: {
    background: "white",
    outline: "none",
    height: "75%",
    margin: "auto",
    marginTop: "5%",
    padding: "10px",
    width: "75%"
  },
  productImage: {
    display: "block",
    height: "30%",
    marginLeft: "auto",
    marginTop: "10%",
    marginRight: "auto",
    width: "30%"
  },
  productTitle: {
    fontSize: 30,
    fontWeight: "bold",
    marginTop: "2%",
    textAlign: "center"
  }
};

class ProductModal extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { classes } = this.props;

    return (
      <Modal open={this.props.open} onClose={this.props.onClose}>
        <div className={classes.modal}>
          <Typography className={classes.productTitle}>
            {this.props.productTitle}
          </Typography>
          <img
            className={classes.productImage}
            src={this.props.productImage}
            alt=""
          />
        </div>
      </Modal>
    );
  }
}

ProductModal.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ProductModal);
