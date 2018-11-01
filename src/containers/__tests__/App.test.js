import React from "react";
import { shallow } from "enzyme";
import { App } from "../App";
import { initialState } from "../../reducers";

describe("App", () => {
  let app;

  beforeEach(() => {
    const fn = jest.fn();
    app = shallow(<App selectCurrentProduct={fn} state={initialState} />);
  });

  it("renders without blowing up", () => {});

  it("contains the carousel component", () => {
    let carousel = app.find("Carousel");
    expect(carousel.length).toBe(1);
  });

  it("contains the search widget", () => {
    let search = app.find("SearchContainer");
    expect(search.length).toBe(1);
  });
});
