import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classNames";
import Drawer from "@material-ui/core/Drawer";
import { withStyles } from "@material-ui/core/styles";
import { List, ListItem, ListItemText, ListItemIcon } from "@material-ui/core";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import "../css/Sidebar.css";

const styles = {
  drawerPaperSpecial: {
    overflow: "hidden",
    backgroundColor: "#9b9b9b"
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
    const { classes } = this.props;
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
              classes.drawerPaperSpecial,
              !open && "drawerPaperClose"
            )
          }}
          style={{ backgroundColor: "#9b9b9b" }}
        >
          <List>
            <ListItem
              className="listItem"
              id="listItemFirst"
              onClick={this.handleSidebarToggle}
              style={{ color: "white" }}
              button
            >
              {open === false ? <ChevronRightIcon /> : <ChevronLeftIcon />}
            </ListItem>
            <ListItem className="listItem" button>
              <ListItemIcon>
                <i
                  className="material-icons outline"
                  style={{ color: "white" }}
                >
                  info
                </i>
              </ListItemIcon>
              <ListItemText
                primary="Information"
                primaryTypographyProps={{ color: "inherit" }}
              />
            </ListItem>
            <ListItem className="listItem" button>
              <ListItemIcon>
                <i className="material-icons" style={{ color: "white" }}>
                  home
                </i>
              </ListItemIcon>
              <ListItemText
                primary="Roofing"
                primaryTypographyProps={{ color: "inherit" }}
              />
            </ListItem>
            <ListItem className="listItem" button>
              <ListItemIcon>
                <i className="material-icons" style={{ color: "white" }}>
                  view_headline
                </i>
              </ListItemIcon>
              <ListItemText
                primary="Siding"
                primaryTypographyProps={{ color: "inherit" }}
              />
            </ListItem>
            <ListItem className="listItem" button>
              <ListItemIcon>
                <i className="material-icons" style={{ color: "white" }}>
                  web_asset
                </i>
              </ListItemIcon>
              <ListItemText
                primary="Windows"
                primaryTypographyProps={{ color: "inherit" }}
              />
            </ListItem>
            <ListItem className="listItem" button>
              <ListItemIcon>
                <i className="material-icons" style={{ color: "white" }}>
                  shopping_cart
                </i>
              </ListItemIcon>
              <ListItemText
                primary="Shop"
                primaryTypographyProps={{ color: "white" }}
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
