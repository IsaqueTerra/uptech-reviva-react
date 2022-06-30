import { ReactNode } from "react";
import { ProductsLink, ProductsTitle } from "./styles";

const Caption = ({ children }: { children: ReactNode }) => {
  return (
    <ProductsTitle>
      <ProductsLink href="#">{children}</ProductsLink>
    </ProductsTitle>
  );
};

export default Caption;
