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
  constructor(props) {
    super(props);
    this.state = {
      anchorE1: null,
      redirectHome: false
    };
  }

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };
  handleClick = () => {
    this.handleClose();
    this.props.handler();
  };
  clickHandler = () => {
    this.setState({
      redirectHome: true
    });
  };
  render() {
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);
    const { buttons } = this.props;

    if (buttons !== []) {
      Buttons = [];
      buttons.forEach(name => {
        Buttons.push(
          <MenuItem onClick={this.handleClick} key={name} color="primary">
            {name}
          </MenuItem>
        );
      });
    }

    if (this.state.redirectHome) {
      this.setState({ redirectHome: false });
      alert("Wanna go home but no home page ;.(");
    }

    const Logo = (
      <div
        style={{ position: "absolute", left: "20px" }}
        onClick={this.clickHandler}
      >
        <span id="HomeTitle">
          Corner
          <span id="StoneTitle">Stone</span>
        </span>
      </div>
    );
    const BarMenu = (
      <div>
        <IconButton
          className="button"
          aria-owns={open ? "Menu" : null}
          aria-haspopup="true"
          onClick={this.handleMenu}
          aria-label="Menu"
          color="secondary"
        >
          <MenuIcon />
        </IconButton>
      </div>
    );
    return (
      <div>
        <MuiThemeProvider theme={muiTheme}>
          <AppBar
            position="relative"
            color="primary"
            style={{ position: "absolute" }}
          >
            <Toolbar>
              {Logo}
              <div style={{ position: "absolute", right: "20px" }}>
                {BarMenu}
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
