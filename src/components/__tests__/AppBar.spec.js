import React from "react";
import ReactDOM from "react-dom";
import AppTest from "../AppBar";
import ReactTestUtils from "react-dom/test-utils";
import { shallow } from "enzyme";

describe("AppBar ", () => {
  const div = document.createElement("div");
  it("renders without crashing", () => {
    ReactDOM.render(<AppTest buttons={[]} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
