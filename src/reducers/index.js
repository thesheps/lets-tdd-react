import types from "../constants";

export const initialState = {};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_CURRENT_PRODUCT:
      return {
        ...state,
        currentProduct: {
          productId: action.productId,
          productCode: action.productCode
        }
      };

    default:
      return state;
  }
};

export default reducer;
