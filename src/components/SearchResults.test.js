import React from "react";
import SearchResults from "./SearchResults";
import { shallow } from "enzyme";

describe("SearchResults", () => {
  it("renders without blowing up", () => {
    shallow(<SearchResults />);
  });

  it("renders the search results correctly", () => {
    let searchResults = [{ productId: 1, productCode: "ABC" }];
    let wrapper = shallow(<SearchResults searchResults={searchResults} />);

    const result = wrapper.find("li");
    expect(result).toHaveLength(1);
    expect(result.text()).toEqual("ABC");
  });

  it("calls the correct function when search item is clicked", () => {
    let searchResults = [
      { productId: 1, productCode: "ABC" },
      { productId: 2, productCode: "DEF" }
    ];

    let mockFn = jest.fn();
    let wrapper = shallow(
      <SearchResults
        searchResults={searchResults}
        selectCurrentProduct={mockFn}
      />
    );

    const result = wrapper.find("li").first();
    result.simulate("click");

    expect(mockFn.mock.calls.length).toBe(1);
    expect(mockFn.mock.calls[0][0]).toEqual(searchResults[0]);
  });
});
