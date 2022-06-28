import React, { Children } from "react";
import styled from "styled-components";

const ProductFeature = styled.div`
  display: flex;
  flex-direction: column;
`;

const FeaturesTitle = styled.h2`
  margin: 0;
  font-size: 1.8em;
`;
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
