import React, { Component } from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import IconButton from "@material-ui/core/IconButton";
import Toolbar from "@material-ui/core/Toolbar";
import { withStyles } from "@material-ui/core/styles";
import { createMuiTheme, MenuItem } from "@material-ui/core";
import Menu from "@material-ui/core/Menu";
import MenuIcon from "@material-ui/icons/Menu";

const muiTheme = createMuiTheme({
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
let Buttons = [];
class HeaderBar extends Component {
  state = {
    anchorEl: null
  };

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);
    const { buttons, auth, handler } = this.props;
    let handleClick = () => {
      this.handleClose();
      handler();
    };

    if (auth === true) {
      Buttons = [];
      buttons.forEach(name => {
        Buttons.push(
          <MenuItem onClick={handleClick} key={name} color="primary">
            {name}
          </MenuItem>
        );
      });
    }
    handleClick = () => {
      this.handleClose();
    };

    const Logo = (
      <div style={{ position: "absolute", left: "20px" }}>
        <span id="HomeTitle">
          Corner
          <span id="StoneTitle">Stone</span>
        </span>
      </div>
    );
    const BarMenu = (
      <IconButton
        aria-owns={open ? "Menu" : null}
        aria-haspopup="true"
        onClick={this.handleMenu}
        aria-label="Menu"
        color="Secondary"
      >
        <MenuIcon />
      </IconButton>
    );
    return (
      <div>
        <MuiThemeProvider theme={muiTheme}>
          <AppBar position="relative" color="primary">
            <Toolbar>
              {Logo}
              <div style={{ position: "absolute", right: "20px" }}>
                {this.props.auth ? BarMenu : null}
                <Menu
                  id="Menu"
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
                  {Buttons}
                </Menu>
              </div>
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
