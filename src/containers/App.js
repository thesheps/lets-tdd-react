import { connect } from "react-redux";
import React from "react";
import SearchContainer from "./SearchContainer";
import Carousel from "./Carousel";

export const App = ({ currentProduct, selectCurrentProduct }) => (
  <div>
    <SearchContainer selectCurrentProduct={selectCurrentProduct} />
    <Carousel currentProduct={currentProduct} />
  </div>
);

const mapStateToProps = state => ({
  currentProduct: state.selectCurrentProduct.currentProduct
});

export default connect(mapStateToProps)(App);
