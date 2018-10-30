import React from "react";
import ReactDOM from "react-dom";
import SideBar from "../SideBar";

describe("SideBar ", () => {
  const div = document.createElement("div");
  it("SideBar renders successfully", () => {
    ReactDOM.render(<SideBar />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
