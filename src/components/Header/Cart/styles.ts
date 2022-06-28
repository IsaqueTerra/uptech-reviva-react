import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

interface HeaderCartProps {
  quantity_cart?: number
}

export const HeaderCart = styled.a<HeaderCartProps>`
align-items: flex-end;
background: center no-repeat url(../../icons/logo-cart-shopping.svg);
display: flex;
height: 5em;
justify-content: flex-end;
transition: 0.4s all;
width: 5em;
${({ quantity_cart }) => quantity_cart && css`
  &::after{
    align-items: center;
    background: black;
    border-radius: 100%;
    color:  white;
    content: "${quantity_cart}";
    display: flex;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 1.1em;
    font-weight: bold;
    height: 18px;
    justify-content: center;
    text-align: center;
    width: 18px;
  }
`}

&:hover {
  transform: scale(1.1);
}
`;
