import React from "react";
import ProductDetails from "./ProductDetails";
import { shallow } from "enzyme";

describe("ProductDetails", () => {
  let product = {
    imageUrl: "fancy-telly.png",
    price: "1"
  };

  it("renders without blowing up", () => {});

  it("contains an image with the correct src", () => {
    let details = shallow(<ProductDetails product={product} />);
    let img = details.find("img");
    expect(img.length).toBe(1);
    expect(img.prop("src")).toEqual(product.imageUrl);
  });

  it("renders no image if the product is null", () => {
    let details = shallow(<ProductDetails product={null} />);
    let img = details.find("img");
    expect(img.length).toBe(0);
  });

  it("renders no image if the product is empty", () => {
    let details = shallow(<ProductDetails product={{}} />);
    let img = details.find("img");
    expect(img.length).toBe(0);
  });

  it("contains a lovely textual description of the product", () => {
    let details = shallow(
      <ProductDetails
        product={{
          description: "a lovely textual description of the product",
          price: 2
        }}
      />
    );

    let description = details.find(".product-description");
    expect(description.text()).toEqual(
      "a lovely textual description of the product"
    );
  });

  it("contains an alternative message if the product is null or empty", () => {
    let details = shallow(<ProductDetails />);
    let description = details.find(".error-message");

    expect(description.text()).toEqual(
      "Whoops, doesn't look like we can find that product!"
    );
  });

  it("renders an alternative message if the product has no price", () => {
    let product = {
      price: null,
      description: "My Bogus Sku",
      imageUrl: "bogus.png"
    };

    let details = shallow(<ProductDetails product={product} />);
    let description = details.find(".product-description");
    expect(description.length).toBe(0);

    let error = details.find(".error-message");
    expect(error.text()).toEqual(
      "Whoops, doesn't look like we can find that product!"
    );
  });

  it("renders the correct price with currency formatting", () => {
    let product = {
      price: 19.99,
      description: "My chep sku",
      imageUrl: "chep.png"
    };

    let details = shallow(<ProductDetails product={product} />);
    let price = details.find(".product-price");
    expect(price.length).toBe(1);
    expect(price.text()).toEqual("£19.99");
  });
});
