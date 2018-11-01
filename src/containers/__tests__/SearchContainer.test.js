import React from "react";
import { shallow } from "enzyme";
import SearchContainer from "../SearchContainer";

jest.mock("../../api");

describe("SearchContainer", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<SearchContainer />);
  });

  it("should render without blowing up", () => {});

  it("should render the search component", () => {
    let search = wrapper.find("Search");
    expect(search.exists()).toBe(true);
  });

  it("should render the search results component", () => {
    let search = wrapper.find("SearchResults");
    expect(search.exists()).toBe(true);
  });

  it("should have its search results state updated when the search component is invoked", () => {
    const { performSearch } = wrapper.find("Search").props();
    expect(wrapper.state().searchResults).toEqual([]);
    expect(wrapper.find("SearchResults").props().searchResults).toEqual([]);

    return performSearch().then(() => {
      expect(wrapper.state().searchResults).toHaveLength(10);
      expect(wrapper.find("SearchResults").props().searchResults).toHaveLength(
        10
      );
    });
  });
});
