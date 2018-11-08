import React from "react";
import PageNotFound from "../PageNotFound";
import { shallow } from "enzyme";

describe("Page Not Found ", () => {
  it("renders correctly", () => {
    const rendered = shallow(<PageNotFound />);

    expect(rendered).toMatchSnapshot();
  });
});
