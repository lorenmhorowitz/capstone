import React from "react";
import HoverLogin from "../HoverLogin";
import renderer from "react-test-renderer";

describe("Hover login component renders the hover login page correctly", () => {
  it("renders correctly", () => {
    const rendered = renderer.create(<HoverLogin />);

    expect(rendered.toJSON()).toMatchSnapshot();
  });
});
