import React from "react";
import App from "./App";
import { shallow } from "enzyme";

describe("App", () => {
  let app;

  beforeEach(() => {
    app = shallow(<App />);
  });

  it("renders without blowing up", () => {});

  it("contains the layout component", () => {
    let layout = app.find("Layout");
    expect(layout.length).toBe(1);
  });
});
