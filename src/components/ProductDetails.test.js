import React from "react";
import ProductDetails from "./ProductDetails";
import { shallow } from "enzyme";
import defaultImage from "../../public/default.png";

describe("ProductDetails", () => {
  let product = {
    imageUrl: "fancy-telly.png"
  };

  it("renders without blowing up", () => {});

  it("contains an image with the correct src", () => {
    let details = shallow(<ProductDetails product={product} />);
    let img = details.find("img");
    expect(img.length).toBe(1);
    expect(img.prop("src")).toEqual(product.imageUrl);
  });

  it("renders the default image placeholder if the product is null", () => {
    let details = shallow(<ProductDetails product={null} />);
    let img = details.find("img");
    expect(img.length).toBe(1);
    expect(img.prop("src")).toEqual(defaultImage);
  });

  it("renders the default image if the product is empty", () => {
    let details = shallow(<ProductDetails product={{}} />);
    let img = details.find("img");
    expect(img.length).toBe(1);
    expect(img.prop("src")).toEqual(defaultImage);
  });

  it("contains a lovely textual description of the product", () => {
    let details = shallow(
      <ProductDetails
        product={{
          description: "a lovely textual description of the product"
        }}
      />
    );

    let description = details.find(".product-description");
    expect(description.text()).toEqual(
      "a lovely textual description of the product"
    );
  });
});
