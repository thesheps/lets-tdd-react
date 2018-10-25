import React from "react";

const ProductDetails = ({ product }) => {
  if (!product || !product.price) {
    return (
      <p className="error-message">
        Whoops, doesn't look like we can find that product!
      </p>
    );
  }

  if (!product.description) product.description = "Another great deal!";
  if (!product.imageUrl) product.imageUrl = "default.png";

  return (
    <div>
      <img src={!product.imageUrl ? "default.png" : product.imageUrl} />
      <p className="product-description">{product.description}</p>
      <p className="product-price">£{product.price}</p>
    </div>
  );
};

export default ProductDetails;
