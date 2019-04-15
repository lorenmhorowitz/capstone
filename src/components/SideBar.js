import "../css/SideBar.css";
import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import Drawer from "@material-ui/core/Drawer";
import { withStyles } from "@material-ui/core/styles";
import { List, ListItem, ListItemText, ListItemIcon } from "@material-ui/core";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";

const styles = {
  drawerPaperOverrides: {
    overflow: "hidden",
    backgroundColor: "#9b9b9b" //grey
  }
};

class Sidebar extends Component {
  state = {
    open: false
  };

  handleSidebarToggle = () => {
    this.setState({ open: !this.state.open });
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

    const roofingImage = (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width="26"
        height="26"
        viewBox="0 0 192 192"
      >
        <g
          fill="none"
          fillRule="nonzero"
          stroke="none"
          strokeWidth="1"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeMiterlimit="10"
          strokeDasharray=""
          strokeDashoffset="0"
          fontFamily="none"
          fontWeight="none"
          fontSize="none"
          textAnchor="none"
        >
          <path d="M0,192v-192h192v192z" fill="none" />
          <g fill="#ffffff">
            <g id="surface1">
              <path d="M96,51.69231l-96,63.46154v25.84615l96,-63.46154l96,63.46154v-25.84615zM155.07692,51.69231v27.23077l22.15385,14.76923v-42z" />
            </g>
          </g>
        </g>
      </svg>
    );

    const windowsImage = (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width="26"
        height="26"
        viewBox="0 0 192 192"
      >
        <g
          fill="none"
          fillRule="nonzero"
          stroke="none"
          strokeWidth="1"
          strokeLinecap="butt"
          strokeLinejoin="miter"
          strokeMiterlimit="10"
          strokeDasharray=""
          strokeDashoffset="0"
          fontFamily="none"
          fontWeight="none"
          fontSize="none"
          textAnchor="none"
        >
          <path d="M0,192v-192h192v192z" fill="none" />
          <g fill="#ffffff">
            <path d="M19.2,15.36c-2.112,0 -3.84,1.728 -3.84,3.84v72.96h76.8v-76.8zM99.84,15.36v76.8h76.8v-72.96c0,-2.112 -1.728,-3.84 -3.84,-3.84zM15.36,99.84v72.96c0,2.112 1.728,3.84 3.84,3.84h72.96v-76.8zM99.84,99.84v76.8h72.96c2.112,0 3.84,-1.728 3.84,-3.84v-72.96z" />
          </g>
        </g>
      </svg>
    );

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
                  <i className="material-icons outline listItemIcon">info</i>{" "}
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
              <ListItem className="listItem" button>
                <ListItemIcon>
                  <i className="material-icons outline listItemIcon">
                    shopping_cart
                  </i>
                </ListItemIcon>
                <ListItemText
                  primary={`Order`}
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
