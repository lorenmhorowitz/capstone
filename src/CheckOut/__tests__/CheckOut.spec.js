import React from "react";
import Checkout from "../Checkout";
import { shallow } from "enzyme";

describe("The Check Out ", () => {
  it("component renders correctly", () => {
    let wrapper = shallow(<Checkout />);
    expect(wrapper).toMatchSnapshot();
  });
});
