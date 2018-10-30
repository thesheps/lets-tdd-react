import React from "react";

const SearchResults = ({
  searchResults = [],
  setCurrentProduct = () => {}
}) => (
  <ul>
    {searchResults.map(r => (
      <li
        key={r.productId}
        onClick={() => {
          setCurrentProduct(r);
        }}
      >
        {r.productCode}
      </li>
    ))}
  </ul>
);

export default SearchResults;
