import { connect } from "react-redux";
import React from "react";
import SearchContainer from "./SearchContainer";
import Carousel from "./Carousel";

import actions from "../actions";

export const App = ({ currentProduct, selectCurrentProduct }) => (
  <div>
    {currentProduct}
    <SearchContainer selectCurrentProduct={selectCurrentProduct} />
    <Carousel currentProduct={currentProduct} />
  </div>
);

function fuckOff(state) {
  console.log(state);
  return {
    currentProduct: state.currentProduct
  };
}

const mapStateToProps = state => fuckOff(state);

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
