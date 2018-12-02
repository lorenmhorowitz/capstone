import React, { Component } from "react";
// import request from "request"
import AppBar from "../components/AppBar";
import Loading from "../components/Loading";
import "../css/home.css";
import { GridList } from "@material-ui/core";
import JobCard from "../components/JobCard";
import { mockJobsList } from "../../mocks/mockJobsList";

// const JOBSURL = "https://us-central1-hdqc-capstone.cloudfunctions.net/getJobs";

class Home extends Component {
  state = {
    loading: true,
    dataArr: mockJobsList,
    jobCardArray: []
  };

  // componentWillMount(){
  //     request.get(
  //       {
  //           url: JOBSURL,
  //           header: {
  //             "Access-Control-Request-Headers": "",
  //             "Access-Control-Request-Method": ""
  //           },
  //           json: true,
  //           body: {
  //             kind: "jobs",
  //             key: "username"
  //           },
  //           function(error, response){
  //             if (error){
  //             console.log(error)
  //             return
  //             }
  //             if (response.statusCode === 200){
  //               console.log(response)
  //             }
  //           }
  //       }
  //     )
  // }

  render() {
    return (
      <div>
        <AppBar />
        {this.state.loading ? <Loading /> : null}
        <GridList className={this.props.GridList}>
          {this.state.dataArr.results.map(data => (
            <JobCard
              key={data.id}
              name={data.name}
              location_line_1={data.location_line_1}
              location_city={data.location_city}
              location_region={data.location_region}
              image="https://upload.wikimedia.org/wikipedia/commons/2/25/Houses_on_Garfield_Place,_Poughkeepsie,_NY.jpg"
            />
          ))}
        </GridList>
      </div>
    );
  }
}

export default Home;
