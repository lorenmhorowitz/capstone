import React from "react";
import CheckOut from "../CheckOut";
import { shallow } from "enzyme";

describe("The Check Out ", () => {
  it("component renders correctly", () => {
    let wrapper = shallow(<CheckOut />);
    expect(wrapper).toMatchSnapshot();
  });
});
