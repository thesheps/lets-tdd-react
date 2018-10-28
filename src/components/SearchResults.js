import React from "react";

const SearchResults = ({ searchResults = [] }) => (
  <ul>
    {searchResults.map(r => (
      <li key={r.productId}>{r.productCode}</li>
    ))}
  </ul>
);

export default SearchResults;
