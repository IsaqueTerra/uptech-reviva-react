// import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import theme from "styles/global";

export const CartCheckout = styled.ul`
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

  @media (max-width: ${theme.breakpoints.lg}) {
    margin: 0;
    position: relative;
    width: 100%;
  }
`;

export const CheckoutTotal = styled.li`
  list-style: none;
  margin: 0 0 0.5em 0;
  word-spacing: 20;

  @media (max-width: ${theme.breakpoints.lg}) {
    font-size: 1.2em;
  }
`;

export const CheckoutButton = styled.a`
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

export const Price = styled.li`
  list-style: none;
  margin: 0.5em;
`;

