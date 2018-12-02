import React, { Component } from "react";
import AppBar from "../components/AppBar";
import Loading from "../components/Loading";
import "../css/home.css";
import { GridList } from "@material-ui/core";
import JobCard from "../components/JobCard";
import { mockJobsList } from "../../mocks/mockJobsList";

class Home extends Component {
  state = {
    loading: true
  };

  render() {
    return (
      <div>
        <AppBar />
        {this.state.loading ? <Loading /> : null}
        <GridList className={this.props.GridList}>
          <JobCard
            name={mockJobsList.results[0].name}
            location_line_1={mockJobsList.results[0].location_line_1}
            location_city={mockJobsList.results[0].location_city}
            location_region={mockJobsList.results[0].location_region}
            image="https://upload.wikimedia.org/wikipedia/commons/2/25/Houses_on_Garfield_Place,_Poughkeepsie,_NY.jpg"
          />
        </GridList>
      </div>
    );
  }
}

export default Home;
