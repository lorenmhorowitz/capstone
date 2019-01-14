import React from "react";
import Job from "../Job";
import { shallow } from "enzyme";

describe.skip("Job Component", () => {
  it("renders without crashing", () => {
    let wrapper = shallow(<Job />);
    expect(wrapper).toMatchSnapshot();
  });
});
