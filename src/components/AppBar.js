import React, { Component } from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import { createMuiTheme } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

const muiTheme = createMuiTheme({
  palette: {
    primary: {
      light: "#757ce8",
      main: "#4D4847",
      dark: "#f78a4d",
      contrastText: "#000000"
    }
  }
});

const styles = {
  root: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
};

class HeaderBar extends Component {
  render() {
    const Logo = (
      <div style={{ position: "absolute", left: "20px" }}>
        <span id="HomeTitle">
          Corner
          <span id="StoneTitle">Stone</span>
        </span>
      </div>
    );
    const Menus = (
      <IconButton>
        <MenuIcon />
      </IconButton>
    );
    return (
      <div>
        <MuiThemeProvider theme={muiTheme}>
          <AppBar position="relative" color="primary">
            <Toolbar>
              {Logo}
              {Menus}
            </Toolbar>
          </AppBar>
        </MuiThemeProvider>
      </div>
    );
  }
}
HeaderBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(HeaderBar);
