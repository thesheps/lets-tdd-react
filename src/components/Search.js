import React, { Component } from "react";

class Search extends Component {
  state = {
    value: ""
  };

  handleChange = event => {
    let value = event.target.value;
    this.setState({ value });
  };

  render() {
    return (
      <input
        type="text"
        placeholder="Search..."
        onChange={this.handleChange}
        value={this.state.value}
      />
    );
  }
}

export default Search;
