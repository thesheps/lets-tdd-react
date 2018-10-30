import types from "../constants";

const actions = {
  setCurrentProduct(product) {
    return {
      type: types.SET_CURRENT_PRODUCT,
      productId: product.productId,
      productCode: product.productCode
    };
  }
};

export default actions;
