import { ProductContext } from "contexts/product.context";
import { IProducts } from "contracts";
import { useContext, useState } from "react";
import Banner from "../Banner";
import News from "../News";
import ProductList from "./Product_List";

interface MainProps {
  listProduct: IProducts[];
}

const Main = ({ listProduct }: MainProps) => {
  return (
    <>
      <ProductList
        products={listProduct}
        category="ultimos-lancamentos"
        titleBanner="Últimos lançamentos"
      />
      <Banner />
      <ProductList
        products={listProduct}
        category="colecao-verao"
        titleBanner="Últimos lançamentos"
      />
      <News />
    </>
  );
};

export default Main;
