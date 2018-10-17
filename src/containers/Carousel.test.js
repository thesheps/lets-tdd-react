import React from "react";
import Carousel from "./Carousel";
import { shallow } from "enzyme";

describe("Carousel", () => {
  let carousel;

  it("renders without blowing up", () => {
    carousel = shallow(<Carousel />);
  });
});
