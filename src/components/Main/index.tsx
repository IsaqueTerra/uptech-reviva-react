import { useRecoilValue } from "recoil";
import { postListState } from "state/atoms";
import Banner from "../Banner";
import News from "../News";
import ProductList from "./Product_List";

const Main = () => {
  const products = useRecoilValue(postListState);
  return (
    <>
      <ProductList
        products={products}
        category="ultimos-lancamentos"
        titleBanner="Últimos lançamentos"
      />
      <Banner />
      <ProductList
        products={products}
        category="colecao-verao"
        titleBanner="Últimos lançamentos"
      />
      <News />
    </>
  );
};

export default Main;
