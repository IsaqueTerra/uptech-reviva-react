import { ProductContext } from "contexts/product.context";
import { useContext } from "react";
import Banner from "../Banner";
import News from "../News";
import ProductList from "./Product_List";

const Main = () => {
  const { listProduct } = useContext(ProductContext);
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
