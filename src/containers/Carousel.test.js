import React from "react";
import Carousel from "./Carousel";
import { shallow } from "enzyme";

describe("Carousel", () => {
  let carousel;

  beforeEach(() => {
    carousel = shallow(<Carousel />);
  });

  it("renders without blowing up", () => {});

  it("contains 2 navigation buttons", () => {
    let navigationButtons = carousel.find("NavigationButton");
    expect(navigationButtons.length).toBe(2);
  });

  it("contains the product details widget", () => {
    let productDetails = carousel.find("ProductDetails");
    expect(productDetails.length).toBe(1);
  });

  it("contains a 'buy' button", () => {
    let buyButtons = carousel.find("BuyButton");
    expect(buyButtons.length).toBe(1);
  });
});
