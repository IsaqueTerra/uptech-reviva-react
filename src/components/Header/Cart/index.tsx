import { Link } from "react-router-dom";
import styled from "styled-components";

const HeaderCart = styled(Link)`
  background: center no-repeat url(../../icons/logo-cart-shopping.svg);
  transition: 0.4s all;
  height: 5em;
  width: 5em;

  &:hover {
    transform: scale(1.1);
  }
`;

const Cart = () => {
  return <HeaderCart to="/cart" aria-label="carrinho de compra" />;
};
export default Cart;
