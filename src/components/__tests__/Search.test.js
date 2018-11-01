import React from "react";
import Search from "../Search";
import { shallow } from "enzyme";

describe("Search", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Search performSearch={() => {}} />);
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

  it("it calls the mapped function when the search term is changed", () => {
    let mockFn = jest.fn();
    const search = <Search performSearch={mockFn} />;

    shallow(search)
      .find("input")
      .simulate("change", { target: { value: "Dishwasher" } });

    expect(mockFn.mock.calls.length).toBe(1);
    expect(mockFn.mock.calls[0][0]).toBe("Dishwasher");
  });
});
