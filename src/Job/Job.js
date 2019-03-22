import "../css/job.css";
import AppBar from "../components/AppBar";
import { connect } from "react-redux";
import Divider from "@material-ui/core/Divider";
import { Grid } from "@material-ui/core";
import Information from "./Information";
import Loading from "../components/Loading";
import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import request from "request";
import SideBar from "../components/SideBar";
import Typography from "@material-ui/core/Typography";
import calculator from "../calculator/calculator";

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
            roofingProductCards.push(
              <ProductCard
                brand={currentProduct.brand}
                image={currentProduct.image}
                itemID={currentProduct.item_id}
                key={index++}
                model={currentProduct.model}
                name={currentProduct.name}
                otherProducts={jobDetails}
                price={currentProduct.price}
                quantity={currentProduct.quantity}
                title={this.toUpperCaseAndSplit(category)}
                weight={currentProduct.weight}
              />
            );
          }
        });
      });
    }

    let windowsProductCards = [];
    if (!this.state.loading) {
      const jobDetails = this.state.jobDetails.products.windows;
      Object.keys(jobDetails).map(category => {
        Object.keys(jobDetails[category]).map(product => {
          let currentProduct = jobDetails[category][product].products[0];
          if (currentProduct.selected) {
            windowsProductCards.push(
              <ProductCard
                brand={currentProduct.brand}
                image={currentProduct.image}
                key={index++}
                model={currentProduct.model}
                name={currentProduct.name}
                otherProducts={jobDetails}
                price={currentProduct.price}
                quantity={currentProduct.quantity}
                title={this.toUpperCaseAndSplit(category)}
                weight={currentProduct.weight}
              />
            );
          }
        });
      });
    }

    let sidingProductCards = [];
    if (!this.state.loading) {
      const jobDetails = this.state.jobDetails.products.siding;
      Object.keys(jobDetails).map(category => {
        Object.keys(jobDetails[category]).map(product => {
          let currentProduct = jobDetails[category][product].products[0];
          if (currentProduct.selected) {
            sidingProductCards.push(
              <ProductCard
                brand={currentProduct.brand}
                image={currentProduct.image}
                key={index++}
                model={currentProduct.model}
                name={currentProduct.name}
                otherProducts={jobDetails}
                price={currentProduct.price}
                quantity={currentProduct.quantity}
                title={this.toUpperCaseAndSplit(category)}
                weight={currentProduct.weight}
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
        <div ref={this.infoRef}>
          <Typography id="header">Job Information</Typography>
        </div>
        <Divider id="bar1" />
        <Information jobDetails={this.state.jobDetails} />

        {/* ROOFING INFORMATION SECTION */}
        {this.state.jobDetails.hasOwnProperty("active_projects") &&
        this.state.jobDetails.active_projects.roofing ? (
          <div style={{ paddingTop: "2em" }} ref={this.roofingRef}>
            <Typography id="header2">Roofing Information</Typography>
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
            <Typography id="header">Siding Information</Typography>
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
            <Typography id="header">Windows Information</Typography>
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
