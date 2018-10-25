import React from "react";
import Search from "./Search";
import { shallow } from "enzyme";

describe("Search", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Search />);
  });

  it("renders without blowing up", () => {});

  it("has the correct placeholder", () => {
    let input = wrapper.find("input");
    expect(input.prop("placeholder")).toEqual("Search...");
  });

  it("maps the users input to state", () => {
    wrapper
      .find("input")
      .simulate("change", { target: { value: "Dishwasher" } });

    expect(wrapper.find("input").props().value).toEqual("Dishwasher");
  });
});
