import React from "react";
import NavigationButton from "../components/NavigationButton";
import BuyButton from "../components/BuyButton";
import ProductDetails from "../components/ProductDetails";

const Carousel = () => (
  <div>
    <div>
      <NavigationButton title="<" />
      <ProductDetails />
      <NavigationButton title=">" />
    </div>

    <div>
      <BuyButton />
    </div>
  </div>
);

export default Carousel;
