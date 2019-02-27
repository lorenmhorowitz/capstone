import React from "react";
import Login from "../Login";
import { shallow } from "enzyme";

describe("The login page renders properly", () => {
  it("Login component renders the login page properly", () => {
    let wrapper = shallow(<Login />);
    expect(wrapper).toMatchSnapshot();
  });
});
