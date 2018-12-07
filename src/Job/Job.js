import React, { Component } from "react";
import AppBar from "../components/AppBar";
import Divider from "@material-ui/core/Divider";
import Information from "./Information";
import Loading from "../components/Loading";
import request from "request";
import SideBar from "../components/SideBar";
import Typography from "@material-ui/core/Typography";

import "../css/job.css";

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

    request.post(
      {
        url: JOBURL,
        headers: {
          "Content-Type": "application/json"
        },
        json: true,
        body: {
          key: "username",
          kind: "jobs",
          id: window.location.pathname.replace("/job/", "")
        }
      },
      (error, response, body) => {
        this.setState({
          jobDetails: { ...body },
          loading: false
        });
      }
    );
  }

  scrollToRef = ref => {
    window.scrollTo({
      top: ref.current.offsetTop - topOffset,
      behavior: "smooth"
    });
  };

  render() {
    const loaded = (
      <div id="mainWindow">
        <div ref={this.infoRef}>
          <Typography id="header">Job Information</Typography>
        </div>
        <Divider id="bar1" />
        <div>
          <Information jobDetails={this.state.jobDetails} />
          <p />
          <div ref={this.roofingRef}>
            <Typography id="header2">Roofing Information</Typography>
          </div>
          <Divider id="bar1" />
          <div>
            <p id="para">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              mattis tellus quis turpis gravida sollicitudin. Quisque vehicula
              lorem consectetur vehicula imperdiet. Nullam non suscipit ex, et
              dictum tortor. Vivamus eget volutpat elit. Fusce posuere finibus
              laoreet. Donec tempus orci nec elit condimentum rhoncus. Etiam
              diam nunc, rutrum sed condimentum nec, gravida ut metus. Nullam
              tempus aliquet ante sit amet facilisis. Ut et finibus massa.
              Pellentesque eget elit a neque venenatis scelerisque. Maecenas nec
              nunc massa. Phasellus eget velit vitae orci gravida venenatis in
              quis nisl. Phasellus non lectus eu velit tristique suscipit quis
              nec enim. Quisque venenatis ultricies tortor maximus maximus.
              Aenean ut pharetra nisl. Quisque porttitor, lorem et euismod
              congue, felis turpis hendrerit sem, quis tempor purus nisl
              accumsan dolor. Suspendisse fringilla ex vitae nisl convallis
              ornare. Quisque porta tempus sollicitudin. Quisque suscipit velit
              ut elit hendrerit, in varius mauris malesuada. Aenean vitae
              elementum libero. Sed dignissim porttitor nisl, viverra ornare
              erat porttitor sit amet. In tincidunt orci nibh, ut fermentum urna
              volutpat non. Ut condimentum accumsan neque ut facilisis. Nunc
              congue luctus est a lacinia. Cras a ultricies erat, et tincidunt
              elit. Suspendisse eget mi vel leo luctus dapibus. Praesent
              convallis arcu vitae dolor sagittis, porta euismod quam aliquam.
              Sed vitae sollicitudin eros.
            </p>
          </div>

          <div ref={this.sidingRef}>
            <Typography id="header">Siding Information</Typography>
          </div>
          <Divider id="bar1" />
          <div>
            <p id="para">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              mattis tellus quis turpis gravida sollicitudin. Quisque vehicula
              lorem consectetur vehicula imperdiet. Nullam non suscipit ex, et
              dictum tortor. Vivamus eget volutpat elit. Fusce posuere finibus
              laoreet. Donec tempus orci nec elit condimentum rhoncus. Etiam
              diam nunc, rutrum sed condimentum nec, gravida ut metus. Nullam
              tempus aliquet ante sit amet facilisis. Ut et finibus massa.
              Pellentesque eget elit a neque venenatis scelerisque. Maecenas nec
              nunc massa. Phasellus eget velit vitae orci gravida venenatis in
              quis nisl. Phasellus non lectus eu velit tristique suscipit quis
              nec enim. Quisque venenatis ultricies tortor maximus maximus.
              Aenean ut pharetra nisl. Quisque porttitor, lorem et euismod
              congue, felis turpis hendrerit sem, quis tempor purus nisl
              accumsan dolor. Suspendisse fringilla ex vitae nisl convallis
              ornare. Quisque porta tempus sollicitudin. Quisque suscipit velit
              ut elit hendrerit, in varius mauris malesuada. Aenean vitae
              elementum libero. Sed dignissim porttitor nisl, viverra ornare
              erat porttitor sit amet. In tincidunt orci nibh, ut fermentum urna
              volutpat non. Ut condimentum accumsan neque ut facilisis. Nunc
              congue luctus est a lacinia. Cras a ultricies erat, et tincidunt
              elit. Suspendisse eget mi vel leo luctus dapibus. Praesent
              convallis arcu vitae dolor sagittis, porta euismod quam aliquam.
              Sed vitae sollicitudin eros.
            </p>
          </div>
          <div ref={this.windowsRef}>
            <Typography id="header">Windows Information</Typography>
          </div>
          <Divider id="bar1" />
          <p id="para">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            mattis tellus quis turpis gravida sollicitudin. Quisque vehicula
            lorem consectetur vehicula imperdiet. Nullam non suscipit ex, et
            dictum tortor. Vivamus eget volutpat elit. Fusce posuere finibus
            laoreet. Donec tempus orci nec elit condimentum rhoncus. Etiam diam
            nunc, rutrum sed condimentum nec, gravida ut metus. Nullam tempus
            aliquet ante sit amet facilisis. Ut et finibus massa. Pellentesque
            eget elit a neque venenatis scelerisque. Maecenas nec nunc massa.
            Phasellus eget velit vitae orci gravida venenatis in quis nisl.
            Phasellus non lectus eu velit tristique suscipit quis nec enim.
            Quisque venenatis ultricies tortor maximus maximus. Aenean ut
            pharetra nisl. Quisque porttitor, lorem et euismod congue, felis
            turpis hendrerit sem, quis tempor purus nisl accumsan dolor.
            Suspendisse fringilla ex vitae nisl convallis ornare. Quisque porta
            tempus sollicitudin. Quisque suscipit velit ut elit hendrerit, in
            varius mauris malesuada. Aenean vitae elementum libero. Sed
            dignissim porttitor nisl, viverra ornare erat porttitor sit amet. In
            tincidunt orci nibh, ut fermentum urna volutpat non. Ut condimentum
            accumsan neque ut facilisis. Nunc congue luctus est a lacinia. Cras
            a ultricies erat, et tincidunt elit. Suspendisse eget mi vel leo
            luctus dapibus. Praesent convallis arcu vitae dolor sagittis, porta
            euismod quam aliquam. Sed vitae sollicitudin eros.
          </p>

          <Divider id="bar1" />
          <div />
        </div>
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

export default Job;
