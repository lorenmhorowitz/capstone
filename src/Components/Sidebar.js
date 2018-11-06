import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classNames";
import Drawer from "@material-ui/core/Drawer";
import { withStyles } from "@material-ui/core/styles";
import { IconButton, Divider, ListItemIcon } from "@material-ui/core";
import { List, ListItem, ListItemText } from "@material-ui/core";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import styles from "../css/SideBarcss.js";

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
      <div className={classes.root}>
        <Drawer
          variant="permanent"
          anchor="left"
          open={open}
          classes={{
            paper: classNames(
              classes.drawerPaper,
              !open && classes.drawerPaperClose
            )
          }}
        >
          <div>
            <Divider />
            <IconButton
              className={classes.iconButton}
              onClick={this.handleSidebarToggle}
            >
              {open === false ? <ChevronRightIcon /> : <ChevronLeftIcon />}
            </IconButton>
          </div>
          <List>
            <Divider className={classes.divider} />
            <ListItem className={classes.listItem} button>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary="Info" />
            </ListItem>
            <Divider className={classes.divider} />
            <ListItem className={classes.listItem} button>
              <ListItemIcon>
                <MailIcon />
              </ListItemIcon>
              <ListItemText primary="Roofing" />
            </ListItem>
            <Divider className={classes.divider} />
            <ListItem className={classes.listItem} button>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary="Siding" />
            </ListItem>
            <Divider className={classes.divider} />
            <ListItem className={classes.listItem} button>
              <ListItemIcon>
                <MailIcon />
              </ListItemIcon>
              <ListItemText primary="Windows" />
            </ListItem>
            <Divider className={classes.divider} />
            <ListItem className={classes.listItem} button>
              <ListItemIcon>
                <MailIcon />
              </ListItemIcon>
              <ListItemText primary="Shop" />
            </ListItem>
            <Divider />
          </List>
        </Drawer>
      </div>
    );
  }
}

Sidebar.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(Sidebar); // {withTheme} prevents Warning
