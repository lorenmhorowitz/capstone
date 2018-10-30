import React from "react";
import ReactDOM from "react-dom";
import AppBar from "../AppBar";
// import renderer from "react-test-renderer";
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
  // it("accepts and handles a click on the logo", () => {
  //   const buttons = ["Logout"];
  //    let redirect = false;
  //   let wrapper = mount(<AppBar buttons={buttons}/>);

  //   expect(redirect).toBe(false);
  //   const toolbar = wrapper.find("logo");
  //   console.log(toolbar.html());

  //   toolbar.simulate("click", {onClick: () => {
  //     redirect= true
  //   }
  // });
  //   expect(redirect).toBe(true);
  // });
});
