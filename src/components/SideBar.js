import React, { Component } from "react";
import { Link } from "react-router";
import PropTypes from "prop-types";
import classNames from "classnames";
import Drawer from "@material-ui/core/Drawer";
import { withStyles } from "@material-ui/core/styles";
import { List, ListItem, ListItemText, ListItemIcon } from "@material-ui/core";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import "../css/SideBar.css";

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

  render() {
    const { classes, infoRef, roofingRef, sidingRef, windowsRef } = this.props;
    const { open } = this.state;

    return (
      <div className="root">
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
              containerelement={<Link to="#info" />}
              onClick={infoRef}
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
            <ListItem
              containerelement={<Link to="#roofing" />}
              onClick={roofingRef}
              className="listItem"
              button
            >
              <ListItemIcon>
                <i className="material-icons outline listItemIcon">home</i>
              </ListItemIcon>
              <ListItemText
                primary="Roofing"
                primaryTypographyProps={{ color: "inherit" }}
              />
            </ListItem>
            <ListItem
              containerelement={<Link to="#siding" />}
              className="listItem"
              onClick={sidingRef}
              button
            >
              <ListItemIcon>
                <i className="material-icons outline listItemIcon">
                  view_headline
                </i>
              </ListItemIcon>
              <ListItemText
                primary="Siding"
                primaryTypographyProps={{ color: "inherit" }}
              />
            </ListItem>
            <ListItem
              containerelement={<Link to="#windows" />}
              className="listItem"
              onClick={windowsRef}
              button
            >
              <ListItemIcon>
                <i className="material-icons outline listItemIcon">web_asset</i>
              </ListItemIcon>
              <ListItemText
                primary="Windows"
                primaryTypographyProps={{ color: "inherit" }}
              />
            </ListItem>
            <ListItem
              containerelement={<Link to="#shop" />}
              className="listItem"
              button
            >
              <ListItemIcon>
                <i className="material-icons outline listItemIcon">
                  shopping_cart
                </i>
              </ListItemIcon>
              <ListItemText
                primary="Shop"
                primaryTypographyProps={{ color: "inherit" }}
              />
            </ListItem>
          </List>
        </Drawer>
      </div>
    );
  }
}

Sidebar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(Sidebar); // {withTheme} prevents Warning
