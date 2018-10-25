import React from "react";
import Search from "./Search";
import { shallow } from "enzyme";

describe("Search", () => {
  let search;

  beforeEach(() => {
    search = shallow(<Search />);
  });

  it("renders without blowing up", () => {});

  it("has the correct placeholder", () => {
    let input = search.find("input");
    expect(input.prop("placeholder")).toEqual("Search...");
  });
});
