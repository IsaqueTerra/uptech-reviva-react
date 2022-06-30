import styled from "styled-components";
import theme from "styles/global";

export const ContainerDetails = styled.section`
  box-sizing: border-box;
  display: grid;
  gap: 2em;
  grid-template-areas:
    "image title"
    "image description"
    "image products"
    "image size"
    "image button";
  grid-template-columns: 35% calc(65% - 2em);
  grid-template-rows: 8% auto auto auto auto;
  margin: 5.2em auto;

  @media (max-width: ${theme.breakpoints.xl}) {
    font-size: 1em;
    grid-template-columns: 40% 55%;
    grid-template-rows: 8% auto auto auto auto;
  }

  @media (max-width: ${theme.breakpoints.lg}) {
    font-size: 0.8em;
  }

  @media (max-width: ${theme.breakpoints.md}) {
    font-size: 0.8em;
    grid-template-areas:
      "image title"
      "image description"
      "products products"
      "size size"
      "button button";
    grid-template-columns: 40% 60%;
    grid-template-rows: 12% auto auto auto auto;
    row-gap: 1em;
  }

  @media (max-width: ${theme.breakpoints.sm}) {
    grid-template-areas:
      "image"
      "title"
      "description"
      "products "
      "size"
      "button";
    grid-template-columns: 1fr;
    grid-template-rows: repeat(5, auto) 5em;
    margin: auto;
    row-gap: 1em;
  }
`;

export const Title = styled.h2`
  font-size: 2.4em;
  grid-area: title;
  margin: 0;
  width: calc(100% - 1em);

  @media screen and(min-width: 0) {
    font-size: 2em;
  }
`;

export const Description = styled.p`
  font-size: 2em;
  grid-area: description;
  margin: 0.5em 0;
  width: calc(100% - 1em);

  @media screen and(max-width: ${theme.breakpoints.xl}) {
    font-size: 1.7em;
    margin: 1em 0;
  }
`;
export const DetailsImages = styled.div`
  align-items: center;
  display: flex;
  grid-area: products;
  height: auto;
  justify-content: space-between;
  width: calc(100% - 2em);
`;

export const WrapperDetailsSizes = styled.div`
  grid-area: size;
  justify-self: "flex-start";
  align-self: "center";
  @media (max-width: ${theme.breakpoints.sm}) {
    font-size: 1.5em;
  }
`;

export const WrapperDetailsButton = styled.div`
  align-self: flex-end;
  grid-area: button;
  height: 5em;
  width: 250px;

  @media (max-width: ${theme.breakpoints.sm}) {
    font-size: 1.5em;
    height: 4em;
    width: 100%;
  }
`;