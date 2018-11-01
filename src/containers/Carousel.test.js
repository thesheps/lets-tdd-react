import React from "react";
import Carousel from "./Carousel";
import { mount } from "enzyme";

describe("Carousel", () => {
  let carousel;
  const product = { productId: 666 };

  beforeEach(() => {
    carousel = mount(<Carousel currentProduct={product} />);
  });

  it("renders without blowing up", () => {});

  it("contains 2 navigation buttons", () => {
    let navigationButtons = carousel.find("NavigationButton");
    expect(navigationButtons.length).toBe(2);
  });

  it("contains the product details widget", () => {
    let productDetails = carousel.find("ProductDetails");
    expect(productDetails.length).toBe(1);
    expect(productDetails.props().currentProduct).toEqual(product);
  });

  it("contains a 'buy' button", () => {
    let buyButtons = carousel.find("BuyButton");
    expect(buyButtons.length).toBe(1);
  });
});
