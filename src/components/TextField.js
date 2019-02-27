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
            className="fieldStyle"
            label={label}
            name={label}
            type={label}
            onChange={handler}
          />
        </form>
      </div>
    );
  }
}

export default TextField;
