import types from "../constants";

const actions = {
  selectCurrentProduct(product) {
    return {
      type: types.SELECT_CURRENT_PRODUCT,
      product
    };
  }
};

export default actions;
