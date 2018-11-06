const styles = theme => ({
  root: {
    display: "flex"
  },
  drawerPaper: {
    top: "70px", //moves Sidebar below AppBar
    bottom: "70px",
    position: "fixed",
    whiteSpace: "nowrap", //text doesn't shrink into side
    width: 240,
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
  },
  iconButton: {
    //fixes spacing
    marginTop: "15px",
    marginBottom: "7px"
  },
  listItem: {
    height: "75px"
  }
});

export default styles;
