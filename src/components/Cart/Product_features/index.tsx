import React from "react";
import { FeaturesTitle, ProductFeature } from "./styles";

interface IProductFeatures {
  title: string;
  children: React.ReactNode;
}

const ProductFeatures = ({ title, children }: IProductFeatures) => {
  return (
    <ProductFeature>
      <FeaturesTitle>{title}</FeaturesTitle>
      {children}
    </ProductFeature>
  );
};

export default ProductFeatures;
