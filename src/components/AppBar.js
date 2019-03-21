import AppBars from "@material-ui/core/AppBar";
import { createMuiTheme, IconButton } from "@material-ui/core";
import { Link } from "react-router-dom";
import styles from "../css/Component.css";
import Menu from "@material-ui/core/Menu";
import MenuIcon from "@material-ui/icons/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import PropTypes from "prop-types";
import React, { Component } from "react";
import { Redirect } from "react-router-dom";
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

class AppBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      anchorEl: null,
      redirectLogin: false
    };
  }

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  handleLogout = () => {
    this.setState({ redirectLogin: true });
  };

  render() {
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);

    if (this.state.redirectLogin) {
      return <Redirect push to="/login" />;
    }

    return (
      <div>
        <MuiThemeProvider theme={muiTheme}>
          <AppBars id="bar" color="primary">
            <Toolbar>
              <Link to="/home" id="logo">
                <span id="HomeTitle">Corner</span>
                <span id="StoneTitle">Stone</span>
              </Link>
              <div id="menuButton">
                <IconButton
                  aria-owns={open ? "Menu" : null}
                  aria-haspopup="true"
                  onClick={this.handleMenu}
                  aria-label="Menu"
                  color="secondary"
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right"
                  }}
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right"
                  }}
                  open={open}
                  onClose={this.handleClose}
                >
                  <MenuItem onClick={this.handleLogout}>Logout</MenuItem>
                </Menu>
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
