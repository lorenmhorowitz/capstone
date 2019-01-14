import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";

const styles = theme => ({
  progress: {
    color: window.location.pathname === "/hover" ? "green" : "#f96302",
    margin: theme.spacing.unit * 2,
    position: "fixed",
    top: "25vh",
    left: "46vw"
  }
});

function CircularIndeterminate(props) {
  const { classes } = props;
  return (
    <div>
      <CircularProgress
        className={classes.progress}
        color="primary"
        size={"8vw"}
      />
    </div>
  );
}

CircularIndeterminate.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CircularIndeterminate);
