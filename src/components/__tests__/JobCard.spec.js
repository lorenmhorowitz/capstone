import React from "react";
import JobCard from "../JobCard";
import { shallow } from "enzyme";

describe("AppBar Component", () => {
  it("JobCard renders correctly", () => {
    const image =
      "https://upload.wikimedia.org/wikipedia/commons/2/25/Houses_on_Garfield_Place,_Poughkeepsie,_NY.jpg";
    let wrapper = shallow(<JobCard image={image} />);
    expect(wrapper).toMatchSnapshot();
  });
});
