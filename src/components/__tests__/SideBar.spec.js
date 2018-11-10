import React from "react";
import ReactDOM from "react-dom";
import SideBar from "../SideBar";
import { shallow } from "enzyme";
import { styles } from "../../css/SideBarcss";

describe("SideBar ", () => {
  const div = document.createElement("div");
  it("SideBar renders successfully", () => {
    ReactDOM.render(<SideBar />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("Sidebar snapshot test successful", () => {
    const classes = { styles };
    const sidebar = shallow(<SideBar classes={classes} />);
    expect(sidebar).toMatchSnapshot();
  });
});

//Can test the List
