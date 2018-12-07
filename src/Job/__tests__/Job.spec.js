import React from "react";
import Job from "../Job";
import { shallow } from "enzyme";

global.window = { location: { pathname: "/job/2" } };

describe.skip("Job Component", () => {
  it("renders without crashing", () => {
    let wrapper = shallow(<Job />);
    expect(wrapper).toMatchSnapshot();
  });
});
