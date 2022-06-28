import { useRecoilValue } from "recoil";
import { cartListState } from "state/atoms";
import styled from "styled-components";
import theme from "styles/global";
import ProductListSection from "./Product_cart/ProductListSection";
import Subtotal from "./Subtotal";

const ContentCart = styled.section`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 80%;

  @media (max-width: ${theme.breackpoints.lg}) {
    width: 100%;
  }

  @media (max-width: ${theme.breackpoints.md}) {
    justify-content: flex-start;
  }
`;

const CarTitle = styled.h1`
  font-size: 2.5em;
  margin: 0.5em 0;
`;

const CartMain = () => {
  const cartList = useRecoilValue(cartListState);
  const containsInCart = cartList.length !== 0 ;
  
  return (
    <ContentCart>
      <CarTitle>Minha Sacola</CarTitle>
      <ProductListSection />
      {containsInCart && <Subtotal />}
    </ContentCart>
  );
};

export default CartMain;
