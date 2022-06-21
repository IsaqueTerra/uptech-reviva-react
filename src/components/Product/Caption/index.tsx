import { ReactNode } from "react";
import styled from "styled-components";

const ProductsTitle = styled.h2`
  position: absolute;
`;

const ProductsLink = styled.a`
  color: inherit;
  font-size: 1.3em;
  text-decoration: none;
`;

const Caption = ({ children }: { children: ReactNode }) => {
  return (
    <ProductsTitle>
      <ProductsLink href="#">{children}</ProductsLink>
    </ProductsTitle>
  );
};

export default Caption;
