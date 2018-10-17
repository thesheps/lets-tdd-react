import React from "react";
import NavigationButton from "./NavigationButton";
import { shallow } from "enzyme";

describe("NavigationButton", () => {
  let navButton;

  it("renders without blowing up", () => {
    navButton = shallow(<NavigationButton title="<" />);
  });

  it("contains a button with the correct title", () => {
    let btn = navButton.find("button");
    expect(btn.length).toBe(1);
    expect(btn.text()).toEqual("<");
  });
});
