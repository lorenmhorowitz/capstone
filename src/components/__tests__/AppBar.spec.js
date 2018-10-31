import React from "react";
import ReactDOM from "react-dom";
import HeaderBar from "../AppBar";
import renderer from "react-test-renderer";
import { mount, shallow } from "enzyme";

describe("AppBar Component", () => {
  it("renders without crashing when no buttons are passed", () => {
    const div = document.createElement("div");
    ReactDOM.render(<HeaderBar buttons={[]} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it("renders without crashing when a button is passed", () => {
    const buttons = ["Logout"];
    let wrapper = mount(<HeaderBar buttons={buttons} />);
    expect(wrapper.exists()).toBe(true);
  });
  it("renders a button", () => {
    const buttons = ["Logout"];
    const wrapper = shallow(<HeaderBar buttons={buttons} />);
    expect(wrapper.find(name)).toBeDefined();
  });

  it("renders correctly when a button and handler are passed", () => {
    const buttons = ["Logout"];
    const handler = () => {
      console.log("hello");
    };
    const rendered = renderer.create(
      <HeaderBar buttons={buttons} handler={handler} />
    );
    expect(rendered.toJSON()).toMatchSnapshot();
  });

  // it("renders the right button", () => {
  //   const buttons = ["Logout"];
  //   const wrapper = shallow(<HeaderBar buttons={buttons}/>);
  //   expect(wrapper.contains(key="Logout")).toBeTruthy();
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
  // });
});
