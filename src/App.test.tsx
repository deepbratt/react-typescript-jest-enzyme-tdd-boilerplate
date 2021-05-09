import { shallow } from "enzyme";
import React from "react";
import App from "./App";

describe("App Container", () => {
  test("renders without fail", () => {
    const component = shallow(<App />);
    expect(component).toMatchSnapshot();
  });
});
