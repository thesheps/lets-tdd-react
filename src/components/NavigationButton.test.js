import React from "react";
import NavigationButton from "./NavigationButton";
import { shallow } from "enzyme";

describe("NavigationButton", () => {
  let navButton;

  beforeEach(() => {
    navButton = shallow(<NavigationButton title="<" />);
  });

  it("renders without blowing up", () => {});

  it("contains a button with the correct title", () => {
    let btn = navButton.find("button");
    expect(btn.length).toBe(1);
    expect(btn.text()).toEqual("<");
  });
});
