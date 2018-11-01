import { selectCurrentProduct } from "../actions";

import { connect } from "react-redux";
import React from "react";

export const SearchResults = props => (
  <ul>
    {props.searchResults &&
      props.searchResults.map(r => (
        <li key={r.productId} onClick={() => props.selectCurrentProduct(r)}>
          {r.productCode}
        </li>
      ))}
  </ul>
);

const mapStateToProps = () => ({});
const mapDispatchToProps = dispatch => ({
  selectCurrentProduct: product => dispatch(selectCurrentProduct(product))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchResults);
