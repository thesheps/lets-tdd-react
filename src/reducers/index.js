import types from "../constants";

export const initialState = {};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SELECT_CURRENT_PRODUCT:
      return {
        ...state,
        currentProduct: action.product
      };

    default:
      return state;
  }
};

export default reducer;
