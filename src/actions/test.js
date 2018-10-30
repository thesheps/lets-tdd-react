import constants from "../constants";
import actions from ".";

describe("Actions", () => {
  const productId = 1;
  const productCode = "SKU001";

  it("should create the set current product action", () => {
    let expectedAction = {
      type: constants.SET_CURRENT_PRODUCT,
      productId: productId,
      productCode: productCode
    };

    expect(
      actions.setCurrentProduct({ productId: 1, productCode: productCode })
    ).toEqual(expectedAction);
  });
});
