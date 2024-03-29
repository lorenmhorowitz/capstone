import "../css/SideBar.css";
import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import Drawer from "@material-ui/core/Drawer";
import { withStyles } from "@material-ui/core/styles";
import { List, ListItem, ListItemText, ListItemIcon } from "@material-ui/core";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import { Redirect } from "react-router-dom";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import windowsImage from "../img/windowsimg";
import roofingImage from "../img/roofingimg";

const styles = {
  drawerPaperOverrides: {
    overflow: "hidden",
    backgroundColor: "#9b9b9b" //grey
  }
};

class Sidebar extends Component {
  state = {
    checkoutRedirect: false,
    open: false
  };

  handleSidebarToggle = () => {
    this.setState({ open: !this.state.open });
  };

  handleCheckout = () => {
    this.setState({
      checkoutRedirect: true
    });
  };

  handleSidebarClose = () => {
    this.setState({ open: false });
  };

  render() {
    const {
      classes,
      activeProjects,
      infoRef,
      roofingRef,
      sidingRef,
      windowsRef,
      scrollToRef
    } = this.props;
    const { open } = this.state;

    if (this.state.checkoutRedirect) {
      return <Redirect push to={`${window.location.pathname}/checkout`} />;
    }

    return (
      <div className="root">
        <ClickAwayListener onClickAway={this.handleSidebarClose}>
          <Drawer
            variant="permanent"
            anchor="left"
            open={open}
            classes={{
              paper: classNames(
                "drawerPaper",
                classes.drawerPaperOverrides,
                !open && "drawerPaperClose"
              )
            }}
          >
            <List>
              <ListItem
                className="listItem"
                id="listItemFirst"
                onClick={this.handleSidebarToggle}
                button
              >
                {open === false ? <ChevronRightIcon /> : <ChevronLeftIcon />}
              </ListItem>
              <ListItem
                onClick={() => scrollToRef(infoRef)}
                className="listItem"
                button
              >
                <ListItemIcon>
                  <i className="material-icons outline listItemIcon">info</i>
                </ListItemIcon>
                <ListItemText
                  primary="Information"
                  primaryTypographyProps={{ color: "inherit" }}
                />
              </ListItem>
              {activeProjects.roofing ? (
                <ListItem
                  onClick={() => scrollToRef(roofingRef)}
                  className="listItem"
                  button
                >
                  <ListItemIcon>{roofingImage}</ListItemIcon>
                  <ListItemText
                    primary="Roofing"
                    primaryTypographyProps={{ color: "inherit" }}
                  />
                </ListItem>
              ) : null}
              {activeProjects.siding ? (
                <ListItem
                  onClick={() => scrollToRef(sidingRef)}
                  className="listItem"
                  button
                >
                  <ListItemIcon>
                    <img
                      width="28px"
                      height="28px"
                      src="https://triadfirst.com/wp-content/uploads/2017/09/siding-icon.png"
                      alt=""
                    />
                  </ListItemIcon>
                  <ListItemText
                    primary="Siding"
                    primaryTypographyProps={{ color: "inherit" }}
                  />
                </ListItem>
              ) : null}
              {activeProjects.windows ? (
                <ListItem
                  onClick={() => scrollToRef(windowsRef)}
                  className="listItem"
                  button
                >
                  <ListItemIcon>{windowsImage}</ListItemIcon>
                  <ListItemText
                    primary="Windows"
                    primaryTypographyProps={{ color: "inherit" }}
                  />
                </ListItem>
              ) : null}
              <ListItem
                onClick={() => this.handleCheckout()}
                className="listItem"
                button
              >
                <ListItemIcon>
                  <i className="material-icons outline listItemIcon">
                    shopping_cart
                  </i>
                </ListItemIcon>
                <ListItemText
                  primary={`Check Out`}
                  primaryTypographyProps={{ color: "inherit" }}
                />
              </ListItem>
            </List>
          </Drawer>
        </ClickAwayListener>
      </div>
    );
  }
}

Sidebar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(Sidebar); // {withTheme} prevents Warning
