import React from "react";
import ReactDOM from "react-dom";
import AppTest from "../AppBar";

describe("AppBar ", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<AppTest />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
