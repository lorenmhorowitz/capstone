import React from "react";
import ReactDOM from "react-dom";
import AppBar from "../AppBar";
import renderer from "react-test-renderer";
import { mount, shallow } from "enzyme";

describe("AppBar Component", () => {
  const div = document.createElement("div");
  it("renders without crashing when no buttons are passed", () => {
    ReactDOM.render(<AppBar buttons={[]} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it("renders without crashing when a button is passed", () => {
    const buttons = ["Logout"];
    let wrapper = mount(<AppBar buttons={buttons} />);
    expect(wrapper.exists()).toBe(true);
  });
  // it("matches the snapshot", () => {
  //   const tree = renderer.create(<AppBar buttons={[]}/>,{createNodeMock}).toJSON();
  //   expect(tree).toMatchSnapshot();
  // });
  // it("accepts and handles a click on the logo", () => {
  //   const buttons = ["Logout"];
  //   let wrapper = mount(<AppBar buttons={buttons}/>);
  //   const redirectState = wrapper.state().redirectHome;
  //   // expect(redirect).toBe(false);
  //   const toolbar = wrapper.find("Toolbar");
  //   console.log(toolbar.html());
  //   const Button = toolbar.find("button");
  //   Button.simulate("click");

  //   // expect(redirect).toBe(true);
  });
});
