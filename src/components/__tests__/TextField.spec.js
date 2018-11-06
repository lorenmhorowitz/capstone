import React from "react";
import TextField from "../TextField";
import { shallow } from "enzyme";

describe("TextField component renders properly", () => {
  it("renders with a label passed in", () => {
    let wrapper = shallow(<TextField label="email" />);
    expect(wrapper).toMatchSnapshot();
  });
});
