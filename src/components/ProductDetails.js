import React from "react";

const ProductDetails = ({ product }) => (
  <img src={!product || !product.imageUrl ? "default.png" : product.imageUrl} />
);

export default ProductDetails;
