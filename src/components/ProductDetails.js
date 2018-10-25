import React from "react";

const ProductDetails = ({ product }) => {
  if (!product) {
    product = {
      description: "Another great deal!",
      imageUrl: "default.png"
    };
  }

  if (!product.description) product.description = "Another great deal!";
  if (!product.imageUrl) product.imageUrl = "default.png";

  return (
    <div>
      <img src={!product.imageUrl ? "default.png" : product.imageUrl} />
      <p className="product-description">{product.description}</p>
    </div>
  );
};

export default ProductDetails;
