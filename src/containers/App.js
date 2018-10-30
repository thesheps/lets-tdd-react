import { connect } from "react-redux";
import React from "react";
import SearchContainer from "./SearchContainer";
import Carousel from "./Carousel";

import actions from "../actions";

export const App = ({ selectCurrentProduct }) => (
  <div>
    <SearchContainer selectCurrentProduct={selectCurrentProduct} />
    <Carousel />
  </div>
);

const mapStateToProps = state => state.currentProduct;

const mapDispatchToProps = dispatch => ({
  selectCurrentProduct: product => {
    if (product) {
      dispatch(actions.selectCurrentProduct(product));
    }
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
