import React from "react";
import BuyButton from "./BuyButton";
import { shallow } from "enzyme";

describe("BuyButton", () => {
  let button;

  it("renders without blowing up", () => {
    button = shallow(<BuyButton />);
  });

  it("contains a button with the correct title", () => {
    let btn = button.find("button");
    expect(btn.length).toBe(1);
    expect(btn.text()).toEqual("Buy Now!");
  });
});
