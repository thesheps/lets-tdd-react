import constants from "../constants";

describe("Actions", () => {
  it("should create the select-current-product action", () => {
    let expectedAction = {
      type: constants.SET_CURRENT_PRODUCT,
      productId: 0,
      productCode: "SKU001"
    };
  });
});
