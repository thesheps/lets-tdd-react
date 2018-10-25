import React from "react";

const SearchResults = ({ results = [] }) => (
  <ul>
    {results.map(r => (
      <li key={r.productId}>{r.productCode}</li>
    ))}
  </ul>
);

export default SearchResults;
