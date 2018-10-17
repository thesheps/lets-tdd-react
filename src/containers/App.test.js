import React from "react";
import App from "./App";
import { shallow } from "enzyme";

describe("App", () => {
  let app;

  it("renders without blowing up", () => {
    app = shallow(<App />);
  });

  it("contains the layout component", () => {
    let layout = app.find("Layout");
    expect(layout.length).toBe(1);
  });
});
