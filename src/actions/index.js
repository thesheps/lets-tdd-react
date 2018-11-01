import types from "../constants";

export const selectCurrentProduct = product => {
  return {
    type: types.SELECT_CURRENT_PRODUCT,
    product
  };
};
