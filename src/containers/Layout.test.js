import React from "react";
import Layout from "./Layout";
import { shallow } from "enzyme";

describe("Layout", () => {
  let layout;

  beforeEach(() => {
    layout = shallow(<Layout />);
  });

  it("renders without blowing up", () => {});

  it("contains the carousel component", () => {
    let carousel = layout.find("Carousel");
    expect(carousel.length).toBe(1);
  });
});
