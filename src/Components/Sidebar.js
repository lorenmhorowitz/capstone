import React, { Component } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import Drawer from "@material-ui/core/Drawer";
import { withStyles } from "@material-ui/core/styles";
import { IconButton, Divider, ListItemIcon } from "@material-ui/core";
import { List, ListItem, ListItemText } from "@material-ui/core";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";

const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: "flex"
  },
  drawerPaper: {
    top: "70px", //moves Sidebar below AppBar
    position: "fixed",
    whiteSpace: "nowrap", //text doesn't shrink into side
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      //makes transitions smooth
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerPaperClose: {
    overflowX: "hidden", //display mini sidebar
    width: theme.spacing.unit * 7,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing.unit * 9
    },
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  }
});

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
            <IconButton
              style={{ style: classes.iconButton }}
              onClick={this.handleSidebarToggle}
            >
              {open === false ? <ChevronRightIcon /> : <ChevronLeftIcon />}
            </IconButton>
          </div>
          <List>
            <ListItem button>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary="Project 1" />
              <Divider />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <MailIcon />
              </ListItemIcon>
              <ListItemText primary="Project 2" />
              <Divider />
            </ListItem>
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
