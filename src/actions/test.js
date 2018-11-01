import constants from "../constants";
import actions from ".";

describe("Actions", () => {
  const productId = 1;
  const productCode = "SKU001";

  it("should create the set current product action", () => {
    let expectedAction = {
      type: constants.SELECT_CURRENT_PRODUCT,
      product: {
        productId: productId,
        productCode: productCode
      }
    };

    expect(
      actions.selectCurrentProduct({ productId: 1, productCode: productCode })
    ).toEqual(expectedAction);
  });
});
