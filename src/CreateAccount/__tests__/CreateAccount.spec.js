import React from "react";
import CreateAccount from "../CreateAccount";
import { shallow } from "enzyme";

describe("The Create Account ", () => {
  it("component renders correctly", () => {
    let wrapper = shallow(<CreateAccount />);
    expect(wrapper).toMatchSnapshot();
  });
});
