import React, { Component } from "react";
import SearchResults from "./SearchResults";

class Search extends Component {
  state = {
    value: ""
  };

  handleChange = event => {
    let value = event.target.value;
    this.setState({ value });
    this.props.performSearch(value);
  };

  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="Search..."
          onChange={this.handleChange}
          value={this.state.value}
        />
        <SearchResults />
      </div>
    );
  }
}

export default Search;
