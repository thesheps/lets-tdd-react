import React from "react";

const SearchResults = ({
  searchResults = [],
  selectCurrentProduct = () => {}
}) => (
  <ul>
    {searchResults.map(r => (
      <li key={r.productId} onClick={() => selectCurrentProduct(r)}>
        {r.productCode}
      </li>
    ))}
  </ul>
);

export default SearchResults;
