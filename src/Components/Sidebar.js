import React, { Component } from "react";
import PropTypes from "prop-types";
import Drawer from "@material-ui/core/Drawer";
import { withStyles } from "@material-ui/core/styles";
import { IconButton, Divider } from "@material-ui/core";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { List, ListItem, ListItemText } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

const SidebarList = ["Button 1", "Button 2", "Button 3", "Button 4"];
const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: "flex"
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1
  },
  drawerPaper: {
    top: "60px",
    position: "fixed",
    width: drawerWidth
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
      <div>
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar>
            <IconButton onClick={this.handleSidebarToggle}>
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" align="center">
              [Placeholder Appbar]
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          variant="persistent"
          anchor="left"
          open={open}
          classes={{
            paper: classes.drawerPaper
          }}
        >
          <List>
            {SidebarList.map((text, index) => (
              <ListItem button key={text}>
                <ListItemText primary={text} />
                <Divider />
              </ListItem>
            ))}
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
