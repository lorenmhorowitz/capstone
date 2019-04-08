import Modal from "@material-ui/core/Modal";
import PropTypes from "prop-types";
import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  modal: {
    background: "white",
    outline: "none",
    height: "50%",
    margin: "auto",
    marginTop: "5%",
    padding: "10px",
    width: "50%"
  }
};

class WarningModal extends Component {
  constructor(props) {
    super(props);
  }

  handleClose = () => {
    this.props.handleClose();
  };

  render() {
    const { classes } = this.props;

    return (
      <Modal open={this.props.open} onClose={this.handleClose}>
        <div className={classes.modal}>
          Are you sure you want to discard changes to this?
        </div>
      </Modal>
    );
  }
}

export default withStyles(styles)(WarningModal);
