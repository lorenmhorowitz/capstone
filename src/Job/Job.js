import "../css/job.css";
import AppBar from "../components/AppBar";
import calculator from "../utils/calculator/calculator";
import { connect } from "react-redux";
import Divider from "@material-ui/core/Divider";
import formatter from "../utils/formatter";
import { Grid } from "@material-ui/core";
import Information from "./Information";
import Loading from "../components/Loading";
import ProductCard from "../components/ProductCard";
import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import request from "request";
import SideBar from "../components/SideBar";
import Typography from "@material-ui/core/Typography";

const mapStateToProps = state => {
  return {
    signedIn: state.auth.signedIn
  };
};

const mapDispatchToProps = dispatch => ({});

const topOffset = 65;
const JOBURL = "https://us-central1-hdqc-capstone.cloudfunctions.net/getJob";

class Job extends Component {
  constructor(props) {
    super(props);
    this.infoRef = React.createRef();
    this.roofingRef = React.createRef();
    this.sidingRef = React.createRef();
    this.windowsRef = React.createRef();
    this.state = {
      jobDetails: {},
      loading: true,
      subtotals: {
        roofing: 0.0,
        siding: 0.0,
        windows: 0.0
      }
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
          this.setState({
            jobDetails: { ...body[0] },
            loading: false
          });
        }
      );
    }
  }

  toUpperCaseAndSplit = value => {
    return value.replace(/([A-Z])/g, " $1").replace(/^./, function(str) {
      return str.toUpperCase();
    });
  };

  scrollToRef = ref => {
    window.scrollTo({
      top: ref.current.offsetTop - topOffset,
      behavior: "smooth"
    });
  };

  render() {
    let index = 0;
    let roofingProductCards = [];
    let roofingQuantities;
    let roofingSubtotal = 0.0;
    if (this.state.jobDetails.hasOwnProperty("measurements")) {
      roofingQuantities = calculator.getRoofingProductQuantities(
        this.state.jobDetails.measurements
      );
    }
    if (!this.state.loading) {
      const jobDetails = this.state.jobDetails.products.roofing;
      Object.keys(jobDetails).map(category => {
        Object.keys(jobDetails[category]).map(product => {
          let currentProduct = jobDetails[category][product].products[0];
          if (currentProduct.selected) {
            roofingSubtotal += calculator.getSubtotal(
              currentProduct.price,
              roofingQuantities[category]
            );
            roofingProductCards.push(
              <ProductCard
                productTitle={this.toUpperCaseAndSplit(category)}
                key={index++}
                brand={currentProduct.brand}
                productImage={currentProduct.image}
                description={currentProduct.name}
                cost={currentProduct.price}
                quantity={roofingQuantities[category]}
              />
            );
          }
        });
      });
    }

    let windowsProductCards = [];
    let windowsSubtotal = 0.0;
    if (!this.state.loading) {
      const jobDetails = this.state.jobDetails.products.windows;
      Object.keys(jobDetails).map(category => {
        Object.keys(jobDetails[category]).map(product => {
          let currentProduct = jobDetails[category][product].products[0];
          if (currentProduct.selected) {
            windowsSubtotal += calculator.getSubtotal(
              currentProduct.price,
              currentProduct.quantity
            );
            windowsProductCards.push(
              <ProductCard
                productTitle={this.toUpperCaseAndSplit(category)}
                key={index++}
                brand={currentProduct.brand}
                productImage={currentProduct.image}
                description={currentProduct.name}
                cost={currentProduct.price}
                quantity={currentProduct.quantity}
              />
            );
          }
        });
      });
    }

    let sidingProductCards = [];
    let sidingSubtotal = 0.0;
    if (!this.state.loading) {
      const jobDetails = this.state.jobDetails.products.siding;
      Object.keys(jobDetails).map(category => {
        Object.keys(jobDetails[category]).map(product => {
          let currentProduct = jobDetails[category][product].products[0];
          if (currentProduct.selected) {
            sidingSubtotal += calculator.getSubtotal(
              currentProduct.price,
              currentProduct.quantity
            );
            sidingProductCards.push(
              <ProductCard
                productTitle={this.toUpperCaseAndSplit(category)}
                key={index++}
                brand={currentProduct.brand}
                productImage={currentProduct.image}
                description={currentProduct.name}
                cost={currentProduct.price}
                quantity={currentProduct.quantity}
              />
            );
          }
        });
      });
    }

    // Redirect to Login page if not signed in.
    if (!this.props.signedIn) {
      return <Redirect push to={"/login"} />;
    }

    const loaded = (
      <div id="mainWindow">
        {/* JOB INFORMATION SECTION */}
        <div style={{ marginBottom: "7em" }} ref={this.infoRef}>
          <Typography id="header">Job Information</Typography>
          <Divider id="bar1" />
          <Information
            jobDetails={this.state.jobDetails}
            subtotals={{
              roofingSubtotal: roofingSubtotal,
              sidingSubtotal: sidingSubtotal,
              windowsSubtotal: windowsSubtotal
            }}
          />
        </div>

        {/* ROOFING INFORMATION SECTION */}
        {this.state.jobDetails.hasOwnProperty("active_projects") &&
        this.state.jobDetails.active_projects.roofing ? (
          <div ref={this.roofingRef}>
            <Grid id="projectDisplayBar" container wrap="nowrap">
              <Grid container justify="flex-start">
                <Typography id="header2">Roofing Information</Typography>
              </Grid>
              <Grid container justify="flex-end" alignContent="flex-end">
                <Typography id="header3">
                  Roofing Subtotal: ${formatter.money(roofingSubtotal)}
                </Typography>
              </Grid>
            </Grid>
            <Divider id="bar1" />
            <Grid container spacing={16} alignContent="center">
              {roofingProductCards}
            </Grid>
          </div>
        ) : null}

        {/* SIDING INFORMATION SECTION */}
        {this.state.jobDetails.hasOwnProperty("active_projects") &&
        this.state.jobDetails.active_projects.siding ? (
          <div style={{ paddingTop: "2em" }} ref={this.sidingRef}>
            <Grid container wrap="nowrap">
              <Grid container justify="flex-start">
                <Typography id="header2">Siding Information</Typography>
              </Grid>
              <Grid container justify="flex-end" alignContent="flex-end">
                <Typography id="header3">
                  Siding Subtotal: ${formatter.money(sidingSubtotal)}
                </Typography>
              </Grid>
            </Grid>
            <Divider id="bar1" />
            <Grid container spacing={16} alignContent="center">
              {sidingProductCards}
            </Grid>
          </div>
        ) : null}

        {/* WINDOWS INFORMATION SECTION */}
        {this.state.jobDetails.hasOwnProperty("active_projects") &&
        this.state.jobDetails.active_projects.windows ? (
          <div style={{ paddingTop: "2em" }} ref={this.windowsRef}>
            <Grid container wrap="nowrap">
              <Grid container justify="flex-start">
                <Typography id="header2">Windows Information</Typography>
              </Grid>
              <Grid container justify="flex-end" alignContent="flex-end">
                <Typography id="header3">
                  Windows Subtotal: ${formatter.money(windowsSubtotal)}
                </Typography>
              </Grid>
            </Grid>
            <Divider id="bar1" />
            <Grid container spacing={16} alignContent="center">
              {windowsProductCards}
            </Grid>
          </div>
        ) : null}
        <div />
      </div>
    );

    return (
      <div>
        <AppBar />
        {!this.state.loading &&
        this.state.jobDetails.hasOwnProperty("location_line_1")
          ? loaded
          : null}
        {!this.state.loading &&
        !this.state.jobDetails.hasOwnProperty("location_line_1") ? (
          <div id="mainWindow">
            <Typography id="title1">
              Unable to load job {window.location.pathname.replace("/job/", "")}
            </Typography>
          </div>
        ) : null}
        {this.state.loading ? <Loading /> : null}
        <SideBar
          activeProjects={
            this.state.jobDetails.hasOwnProperty("active_projects")
              ? this.state.jobDetails.active_projects
              : []
          }
          scrollToRef={this.scrollToRef}
          infoRef={this.infoRef}
          roofingRef={this.roofingRef}
          sidingRef={this.sidingRef}
          windowsRef={this.windowsRef}
          id="sideBar"
        />
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Job);
