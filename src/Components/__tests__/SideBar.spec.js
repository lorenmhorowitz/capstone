import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import SideBar from "../SideBar";
import { withStyles } from "@material-ui/core/styles";
import renderer from "react-test-renderer";
import { shallow } from "enzyme";
import { IconButton } from "@material-ui/core";
import { styles } from "../Sidebar";

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
