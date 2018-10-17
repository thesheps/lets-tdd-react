import React from "react";

const ProductDetails = ({ product }) => (
  <div>
    <img
      src={!product || !product.imageUrl ? "default.png" : product.imageUrl}
    />
    <p class="product-description">{product.description}</p>
  </div>
);

export default ProductDetails;
