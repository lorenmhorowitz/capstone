import React from "react";
import GoogleMap from "../GoogleMap";
import { shallow } from "enzyme";

describe("GoogleMap Component", () => {
  it("renders without crashing when location is not passed", () => {
    let wrapper = shallow(<GoogleMap />);
    expect(wrapper).toMatchSnapshot();
  });

  it("renders without crashing when location is passed", () => {
    let wrapper = shallow(<GoogleMap location="Las Vegas, NV" />);
    expect(wrapper).toMatchSnapshot();
  });

  it("renders without crashing when height is passed", () => {
    let wrapper = shallow(<GoogleMap location="Las Vegas, NV" height="50vh" />);
    expect(wrapper).toMatchSnapshot();
  });

  it("renders without crashing when width is passed", () => {
    let wrapper = shallow(<GoogleMap location="Las Vegas, NV" width="50vw" />);
    expect(wrapper).toMatchSnapshot();
  });

  it("renders without crashing when all data is passed", () => {
    let wrapper = shallow(
      <GoogleMap location="Las Vegas, NV" height="50vh" width="50vw" />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
