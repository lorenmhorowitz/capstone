import React from "react";
import CardSlide from "../CardSlide";
import { shallow } from "enzyme";

describe("CardSlide test component", () => {
  it("renders correctly", () => {
    const images = [
      "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&h=350",
      "https://www.control4.com/files/large/e949244caec63b0c7d8c5edd86b8ee95.jpeg"
    ];
    const wrapper = shallow(
      <CardSlide images={images} height={250} width={250} />
    );

    expect(wrapper).toMatchSnapshot();
  });
});
