import { connect } from "react-redux";
import React, { Component } from "react";
import SearchContainer from "./SearchContainer";
import Carousel from "./Carousel";

import actions from "../actions";

export class App extends Component {
  render() {
    return (
      <div>
        {this.props.currentProduct}
        <SearchContainer
          selectCurrentProduct={this.props.selectCurrentProduct}
        />
        <Carousel currentProduct={this.props.currentProduct} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentProduct: state.currentProduct
});

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
