import React from "react";
import SideBar from "../SideBar";
import { shallow } from "enzyme";

describe("SideBar ", () => {
  it("Sidebar snapshot test successful", () => {
    const sidebar = shallow(<SideBar />);
    expect(sidebar).toMatchSnapshot();
  });
});
