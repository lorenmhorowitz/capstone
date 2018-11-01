import React from "react";
import HeaderBar from "../AppBar";
import { shallow } from "enzyme";

describe("AppBar Component", () => {
  it("renders without crashing when a button is passed", () => {
    const buttons = ["Logout"];
    let wrapper = shallow(<HeaderBar buttons={buttons} />);
    expect(wrapper).toMatchSnapshot();
  });

  it("renders correctly when a button and handler are passed", () => {
    const buttons = ["Logout"];
    const handler = () => {
      console.log("hello");
    };
    const wrapper = shallow(<HeaderBar buttons={buttons} handler={handler} />);
    expect(wrapper).toMatchSnapshot();
  });
});
