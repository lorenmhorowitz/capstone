import "../css/Component.css";
import MuiTextField from "@material-ui/core/TextField";
import React, { Component } from "react";

class TextField extends Component {
  render() {
    const { label, handler } = this.props;
    return (
      <div>
        <form className="textField">
          <MuiTextField
            id="fieldStyle"
            label={label}
            type={label}
            className="fieldStyle"
            onChange={handler}
          />
        </form>
      </div>
    );
  }
}

export default TextField;
