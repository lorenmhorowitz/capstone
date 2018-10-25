import React, { Component } from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

import { withStyles } from "@material-ui/core/styles";

const styles = {};

class HeaderBar extends Component {
  render() {
    return (
      <div>
        <AppBar>
          <Toolbar />
        </AppBar>
      </div>
    );
  }
}
HeaderBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(HeaderBar);
