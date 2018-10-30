import types from "../constants";

const actions = {
  selectCurrentProduct(product) {
    return {
      type: types.SELECT_CURRENT_PRODUCT,
      productId: product.productId,
      productCode: product.productCode
    };
  }
};

export default actions;
