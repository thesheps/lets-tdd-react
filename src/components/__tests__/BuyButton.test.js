import React from "react";
import BuyButton from "../BuyButton";
import { shallow } from "enzyme";

describe("BuyButton", () => {
  let button;

  beforeEach(() => {
    button = shallow(<BuyButton />);
  });

  it("renders without blowing up", () => {});

  it("contains a button with the correct title", () => {
    let btn = button.find("button");
    expect(btn.length).toBe(1);
    expect(btn.text()).toEqual("Buy Now!");
  });
});
