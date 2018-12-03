import React from "react";
import Loading from "../Loading";
import { shallow } from "enzyme";

describe("Loading ", () => {
  it("matches snapshot", () => {
    let wrapper = shallow(<Loading />);
    expect(wrapper).toMatchSnapshot();
  });
});
