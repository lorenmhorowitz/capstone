import React, { Component } from "react";
import AppBar from "../components/AppBar";
import Divider from "@material-ui/core/Divider";
import Information from "./Information";
import Loading from "../components/Loading";
import SideBar from "../components/SideBar";
import Typography from "@material-ui/core/Typography";

import "../css/job.css";

class Job extends Component {
  state = {
    loading: true
  };
  render() {
    return (
      <div>
        <AppBar />
        <div id="mainWindow">
          <Typography id="info" variant="h4">
            Job Information
          </Typography>
          <Divider />
          <div>
            <Information />
            <p />
          </div>

          <Typography id="roofing" variant="h4">
            Roofing Information
          </Typography>
          <p>
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
          <Divider />
          <div>
            <p />
          </div>

          <Typography id="siding" variant="h4">
            Siding Information
          </Typography>
          <p>
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

          <Divider />
          <div>
            <p />
          </div>

          <Typography id="windows" variant="h4">
            Windows Information
          </Typography>
          <p>
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

          <Divider />
          <div />
        </div>
        {this.state.loading ? <Loading /> : null}
        <SideBar route={this.path} id="sideBar" />
      </div>
    );
  }
}

export default Job;
