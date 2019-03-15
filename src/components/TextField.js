import "../css/Component.css";
import MuiTextField from "@material-ui/core/TextField";
import React, { Component } from "react";

class TextField extends Component {
  render() {
    const { label, handler, onEnter } = this.props;
    return (
      <div>
        <form
          className="textField"
          onSubmit={e => {
            e.preventDefault();
          }}
        >
          <MuiTextField
            className="fieldStyle"
            label={label}
            name={label}
            type={label}
            onChange={handler}
            onKeyPress={ev => {
              if (ev.key == "Enter") {
                onEnter();
              }
            }}
          />
        </form>
      </div>
    );
  }
}

export default TextField;
