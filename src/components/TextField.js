import "../css/Component.css";
import MuiTextField from "@material-ui/core/TextField";
import React, { Component } from "react";

class TextField extends Component {
  render() {
    const { label } = this.props;
    return (
      <div>
        <form id="textField">
          <MuiTextField id="fieldStyle" label={label} className="form_label" />
        </form>
      </div>
    );
  }
}

export default TextField;
