import { useRecoilValue } from "recoil";
import { IProducts } from "contracts";
import { cartListState } from "state/atoms";
import { Link } from "react-router-dom";
import styled from "styled-components";
import theme from "styles/global";

const CartCheckout = styled.div`
  background-color: ${theme.colors.primary};
  box-sizing: border-box;
  border-radius: 10px;
  color: ${theme.colorsNegative.primary};
  display: flex;
  flex-direction: column;
  font-size: 2em;
  font-weight: bold;
  grid-area: checkout;
  line-height: 1em;
  margin: 2em;
  padding: 1em;
  position: absolute;
  right: 0;
  text-align: center;
  width: 20%;

  @media (max-width: ${theme.breackpoints.lg}) {
    margin: 0;
    position: relative;
    width: 100%;
  }
`;

const CheckoutTotal = styled.p`
  margin-top: 0;
  word-spacing: 20;

  @media (max-width: ${theme.breackpoints.lg}) {
    font-size: 1.2em;
  }
`;

const CheckoutButton = styled(Link)`
  background-color: ${theme.colors.secondary};
  border: none;
  box-sizing: border-box;
  color: inherit;
  font-size: 1em;
  font-weight: bold;
  height: auto;
  margin: auto 0 0 0;
  padding: 0.5em;
  text-decoration: none;
  width: 100%;

  &:hover {
    background-color: ${theme.colors.tertiary};
    cursor: pointer;
  }
`;


const Subtotal = () => {
  const cartList: IProducts[] = useRecoilValue(cartListState);

  const calculatesSubtotal = (list: IProducts[]) => {
    return list
      .reduce((acc, product) => {
        return (acc += product.price * product.items_cart!);
      }, 0)
      .toFixed(2);
  };

  return (
    <CartCheckout>
      <CheckoutTotal>Total R$ {calculatesSubtotal(cartList)}</CheckoutTotal>
      {cartList.map((product: IProducts) => {
        if (product.items_cart! > 0) {
          return (
            <p key={product.id}>
              {product.items_cart} x {product.price} =
              {(product.items_cart! * product.price).toFixed(2)}
            </p>
          );
        }
      })}
      <CheckoutButton to="#">Ir para pagamento</CheckoutButton>
    </CartCheckout>
  );
};

export default Subtotal;
