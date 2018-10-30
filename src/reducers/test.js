import types from "../constants";
import { reducer, initialState } from ".";

describe("reducer", () => {
  it("should return the initial state when no action is passed", () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });
});

describe("set current product", () => {
  const productId = 666;
  const productCode = "SKU666";

  it("should return the correct state", () => {
    const action = {
      type: types.SET_CURRENT_PRODUCT,
      productId: productId,
      productCode: productCode
    };

    const expectedState = {
      currentProduct: {
        productId: productId,
        productCode: productCode
      }
    };

    expect(reducer(undefined, action)).toEqual(expectedState);
  });
});
