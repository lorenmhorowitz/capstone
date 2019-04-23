import "../css/CheckOut.css";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import React, { Component } from "react";

import AppBar from "../components/AppBar";
import { getSelectedProducts } from "./getSelectedProducts";
import ListBuilder from "./ListBuilder";
import Loading from "../components/Loading";
import { Redirect } from "react-router-dom";
import request from "request";

const mapStateToProps = state => {
  return {
    signedIn: state.auth.signedIn
  };
};

const mapDispatchToProps = dispatch => ({});

const JOBURL = "https://us-central1-hdqc-capstone.cloudfunctions.net/getJob";

class CheckOut extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonEnabled: true,
      dialogueOpen: false,
      homeRedirect: false,
      jobDetails: {},
      jobRedirect: false,
      loading: true
    };

    if (this.props.signedIn) {
      request.post(
        {
          url: JOBURL,
          headers: {
            "Content-Type": "application/json"
          },
          json: true,
          body: {
            key: this.props.signedIn,
            kind: "JobDetails",
            id: window.location.pathname.replace("/job/", "")
          }
        },
        (error, response, body) => {
          if (body[0]) {
            this.setState({
              jobDetails: { ...body[0] },
              loading: false
            });
          } else {
            this.setState({
              loading: false
            });
          }
        }
      );
    }
  }

  handleDialogueClose = () => {
    this.setState({
      dialogueOpen: false
    });
  };

  handleHomeRedirect = () => {
    this.setState({ homeRedirect: true });
  };

  handleJobRedirect = () => {
    this.setState({
      jobRedirect: true
    });
  };

  handleSubmitOrder = () => {
    this.setState({
      buttonEnabled: false,
      dialogueOpen: true
    });
  };

  render() {
    if (!this.props.signedIn) {
      return <Redirect push to={"/login"} />;
    }

    if (this.state.homeRedirect) {
      return <Redirect push to="/home" />;
    }

    if (this.state.jobRedirect) {
      const jobReturn = window.location.pathname.replace("/checkout", "");
      return <Redirect push to={jobReturn} />;
    }

    const dialogue = (
      <Dialog
        open={this.state.dialogueOpen}
        onClose={this.handleDialogueClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Your order was successfully submitted. Your order number is{" "}
            {parseInt(Math.random(100) * 10000)}.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={this.handleDialogueClose} autoFocus>
            Back
          </Button>
          <Button onClick={this.handleHomeRedirect} autoFocus>
            Return Home
          </Button>
        </DialogActions>
      </Dialog>
    );

    const products = getSelectedProducts(this.state.jobDetails);
    return (
      <div>
        <AppBar />
        {this.state.loading ? (
          <Loading />
        ) : (
          <div className="productList">
            {this.state.dialogueOpen ? dialogue : null}
            <ListBuilder products={products} />
            <Button
              id="CheckoutButton"
              onClick={() => this.handleJobRedirect()}
            >
              Cancel
            </Button>
            <Button
              id="CheckoutButton"
              onClick={() => this.handleSubmitOrder()}
            >
              Submit Order
            </Button>
          </div>
        )}
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CheckOut);
