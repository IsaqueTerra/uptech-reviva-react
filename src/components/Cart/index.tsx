import styled from "styled-components";
import theme from "styles/global";
import ProductListSection from "./Product_cart/ProductListSection";
import ListSubtotal from "./Subtotal/ListSubtotal";

const ContentCart = styled.section`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 80%;

  @media screen and(max-width: ${theme.breackpoints.lg}) {
    width: 100%;
  }

  @media screen and(max-width: ${theme.breackpoints.md}) {
    justify-content: flex-start;
  }
`;

const CarTitle = styled.h1`
  font-size: 2.5em;
  margin: 0.5em 0;
`;

const CartMain = () => {
  return (
    <ContentCart>
      <CarTitle>Minha Sacola</CarTitle>
      <ProductListSection />
      <ListSubtotal />
    </ContentCart>
  );
};

export default CartMain;
