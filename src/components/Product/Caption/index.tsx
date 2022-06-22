import { ReactNode } from "react";
import styled from "styled-components";
import theme from "styles/global";

const ProductsTitle = styled.h2`
  position: absolute;
  line-height: 1;

  @media screen and (max-width: ${theme.breackpoints.md}) {
    margin-left: 0.6em;
  }
  @media screen and (max-width: ${theme.breackpoints.sm}) {
    font-size: 1.3em;
  }
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
