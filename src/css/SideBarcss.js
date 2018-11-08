const styles = theme => ({
  root: {
    display: "flex"
  },
  drawerPaper: {
    top: "70px", //moves Sidebar below AppBar
    height: "460px", //removes unneeded space from bottom
    width: "220px",
    position: "fixed",
    whiteSpace: "nowrap", //text doesn't shrink into side
    backgroundColor: "#9b9b9b", // light grey
    transition: "all 0.2s linear",
    overflow: "hidden" //removes scrollbar during transition
  },
  drawerPaperClose: {
    width: theme.spacing.unit * 7,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing.unit * 9
    },
    transition: "all 0.2s linear",
    overflow: "hidden" //display mini sidebar
  },
  iconButton: {
    //fixes spacing
    marginTop: "15px",
    marginBottom: "7px",
    color: "white"
  },
  listItem: {
    height: "75px",
    color: "white"
  },
  divider: {
    background: "#ff7043" //orange
  }
});

export default styles;
