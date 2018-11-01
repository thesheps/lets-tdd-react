import React, { Component } from "react";
import Search from "../components/Search";
import { SearchResults } from "../components/SearchResults";

import fetchSearchResults from "../api";

class SearchContainer extends Component {
  state = {
    searchResults: []
  };

  performSearch = event => {
    return fetchSearchResults(event).then(data => {
      this.setState({ searchResults: data.response.results });
    });
  };

  render() {
    return (
      <div>
        <Search performSearch={this.performSearch} />
        <SearchResults
          selectCurrentProduct={this.props.selectCurrentProduct}
          searchResults={this.state.searchResults}
        />
      </div>
    );
  }
}

export default SearchContainer;
