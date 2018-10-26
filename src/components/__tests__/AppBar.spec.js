import React from "react";
import ReactDOM from "react-dom";
import AppBar from "../AppBar";
import renderer from 'react-test-renderer';
import { mount, shallow } from 'enzyme';


describe("AppBar ", () => {
  const div = document.createElement("div");
  it("renders without crashing when no buttons are passed", () => {
    ReactDOM.render(<AppBar buttons={[]} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  // it("renders without crashing when a button is passed", () => {
  //   const buttons = ["Logout"];
  //   const tree = renderer.create(<AppBar buttons={buttons} />).toJSON();
  //   expect(tree).toMatchSnapshot();
  // });





});
