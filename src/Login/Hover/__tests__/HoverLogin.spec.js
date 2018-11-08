import React from "react";
import HoverLogin from "../HoverLogin";
import { shallow } from "enzyme";

describe("Hover login component renders the hover login page correctly", () => {
  it("renders correctly", () => {
    const wrapper = shallow(<HoverLogin />);

    expect(wrapper).toMatchSnapshot();
  });
});
