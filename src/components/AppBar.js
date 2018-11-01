import AppBars from "@material-ui/core/AppBar";
import { createMuiTheme, IconButton } from "@material-ui/core";
import "../css/Components.css";
import MenuIcon from "@material-ui/icons/Menu";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import PropTypes from "prop-types";
import React, { Component } from "react";
import Toolbar from "@material-ui/core/Toolbar";
import { withStyles } from "@material-ui/core/styles";

const muiTheme = createMuiTheme({
  typography: {
    useNextVariants: true
  },
  palette: {
    primary: {
      light: "#757ce8",
      main: "#4D4847",
      dark: "#f78a4d",
      contrastText: "#000000"
    },
    secondary: {
      main: "#FFFFFF"
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
class AppBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      anchorEl: null,
      redirectHome: false
    };
  }

  render() {
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);
    const { classes } = this.props;
    return (
      <div>
        <MuiThemeProvider theme={muiTheme}>
          <AppBars
            position="relative"
            color="primary"
            style={{ position: "absolute" }}
          >
            <Toolbar>
              <div
                style={{ position: "absolute", left: "20px" }}
                onClick={this.clickHandler}
              >
                <span id="HomeTitle">
                  Corner
                  <span id="StoneTitle">Stone</span>
                </span>
              </div>
              <div style={{ position: "absolute", right: "20px" }}>
                <IconButton
                  className={classes.menuButton}
                  aria-owns={open ? "Menu" : null}
                  aria-haspopup="true"
                  onClick={this.handleMenu}
                  aria-label="Menu"
                  color="secondary"
                >
                  <MenuIcon />
                </IconButton>
              </div>
            </Toolbar>
          </AppBars>
        </MuiThemeProvider>
      </div>
    );
  }
}
AppBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AppBar);
