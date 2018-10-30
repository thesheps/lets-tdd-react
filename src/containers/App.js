import { connect } from "react-redux";
import React from "react";
import SearchContainer from "./SearchContainer";
import Carousel from "./Carousel";

import actions from "../actions";

export const App = ({ setCurrentProduct }) => (
  <div>
    <SearchContainer setCurrentProduct={setCurrentProduct} />
    <Carousel />
  </div>
);

const mapStateToProps = state => state.currentProduct;

const mapDispatchToProps = dispatch => ({
  setCurrentProduct: product => {
    if (product) {
      dispatch(actions.setCurrentProduct(product));
    }
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
