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
});
