import React from "react";
import Home from "../Home";
import { shallow } from "enzyme";

describe("Hover login component renders the hover login page correctly", () => {
  it("renders correctly", () => {
    const wrapper = shallow(<Home />);

    expect(wrapper).toMatchSnapshot();
  });
});
