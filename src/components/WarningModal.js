import Button from "@material-ui/core/Button";
import Modal from "@material-ui/core/Modal";
import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography/Typography";

const styles = {
  modal: {
    background: "white",
    outline: "none",
    height: "20%",
    margin: "auto",
    marginTop: "15%",
    padding: "10px",
    width: "35%"
  },
  cancelButton: {
    marginTop: "10%",
    paddingLeft: "30px"
  },
  discardButton: {
    marginLeft: "50%",
    marginTop: "10%"
  },
  warningLabel: {
    color: "#696969",
    fontSize: 16,
    marginTop: "5%",
    textAlign: "center"
  }
};

class WarningModal extends Component {
  render() {
    const { classes } = this.props;

    return (
      <Modal open={this.props.open} onClose={this.handleClose}>
        <div className={classes.modal}>
          <Typography className={classes.warningLabel}>
            Do you want to save changes?
          </Typography>
          <Button className={classes.discardButton} onClick={this.props.onSave}>
            Save
          </Button>
          <Button
            className={classes.cancelButton}
            onClick={this.props.onCancel}
          >
            Discard
          </Button>
        </div>
      </Modal>
    );
  }
}

export default withStyles(styles)(WarningModal);
