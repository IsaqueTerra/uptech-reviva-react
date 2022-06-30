import styled from "styled-components";
import theme from "styles/global";

export const ProductsSpecification = styled.div`
  color: inherit;
  font-size: 1.8em;
  grid-area: details;
  text-decoration: none;
`;

export const WrapperProduct = styled.div`
  display: grid;
  grid-template: auto 4em auto 4em / 50% 50%;
  grid-template-areas:
    "image image"
    "image image"
    "details details"
    "button button";
  margin: 4.2em 2vw;
  width: 100%;

  &:nth-child(4) {
    @media screen and (max-width: ${theme.breakpoints.lg}) {
      display: none;
    }

    @media screen and (max-width: ${theme.breakpoints.md}) {
      display: grid;
    }
  }

  &:nth-child(5) {
    margin-right: 0;

    @media screen and (max-width: ${theme.breakpoints.md}) {
      margin-right: auto;
    }
  }

  &:nth-child(2) {
    margin-left: 0;

    @media screen and (max-width: ${theme.breakpoints.md}) {
      margin-left: auto;
    }
  }

  @media screen and (max-width: ${theme.breakpoints.lg}) {
    margin: 4.2em 2vw;
  }

  @media screen and (max-width: ${theme.breakpoints.md}) {
    margin: 5em auto 0 auto;
    width: 45%;
  }

  @media screen and (max-width: ${theme.breakpoints.lg}) {
    width: 45%;
  }
`;