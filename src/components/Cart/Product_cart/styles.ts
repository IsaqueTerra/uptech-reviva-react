import React from "react";
import styled from "styled-components";
import theme from "styles/global";

export const CartProduct = styled.section`
  column-gap: 2em;
  display: grid;
  grid-template-areas: "image";
  grid-template-columns: 160px 18% 20% 10% 10em 10%;
  grid-template-rows: 200px 20em;
  height: 22em;

  @media (max-width: ${theme.breakpoints.xl}) {
    column-gap: 1em;
    grid-template-columns: 160px 19% 17% 8% 10em 10%;
  }

  @media (max-width: ${theme.breakpoints.md}) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto auto auto auto;
    grid-template-areas:
      "image"
      "image"
      "image"
      "image"
      "image";
    height: auto;
    margin: 1em 0;
  }

  @media (max-width: ${theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto auto auto auto;
    grid-template-areas: "image ";
    row-gap: 1em;
  }
`;

export const Description = styled.p`
  font-size: 1.5em;
  margin: 0.2em 0;
`;

export const Value = styled.p`
  font-size: 1.5em;
  margin: 0.2em 0;
`;

export const Quantity = styled.input`
  border-radius: 0.3em;
  border: 1px solid;
  font-size: 1.5em;
  margin: 0.2em auto;
  text-align: center;
  width: 3em;
  @media (max-width: ${theme.breakpoints.md}) {
    margin: 0.2em 0;
  }
`;

export const Subtotal = styled.p`
  font-size: 1.5em;
  margin: 0.2em 0;
`;

export const WrapperSize = styled.div`
  display: flex;
`;