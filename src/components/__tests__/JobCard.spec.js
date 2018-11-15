import React from "react";
import JobCard from "../JobCard";
import { shallow } from "enzyme";
import { mockJobsList } from "../../../mocks/mockJobsList";

describe("AppBar Component", () => {
  it("JobCard renders correctly", () => {
    const image =
      "https://upload.wikimedia.org/wikipedia/commons/2/25/Houses_on_Garfield_Place,_Poughkeepsie,_NY.jpg";
    const location_line_1 = mockJobsList.results[0].location_line_1;
    const location_city = mockJobsList.results[0].location_city;
    const location_region = mockJobsList.results[0].location_region;
    let wrapper = shallow(
      <JobCard
        image={image}
        location_line_1={location_line_1}
        location_city={location_city}
        location_region={location_region}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
