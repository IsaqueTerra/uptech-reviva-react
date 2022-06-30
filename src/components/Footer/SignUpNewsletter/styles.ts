import styled from "styled-components";
import theme from "styles/global";

export const FooterNewsletter = styled.fieldset`
  align-content: flex-start;
  border: none;
  display: flex;
  flex-wrap: wrap;
  grid-area: newsletter;
  justify-content: space-between;
  justify-self: end;
  list-style: none;
  padding: 0;
  width: 90%;

  @media screen and (max-width: ${theme.breakpoints.lg}) {
    justify-content: center;
    justify-self: center;
  }
`;

export const NewsletterLabel = styled.label`
  font-size: 1.8em;
  font-weight: bold;
  margin-bottom: 0.5em;

  @media screen and (max-width: ${theme.breakpoints.lg}) {
    margin: 0;
  }
`;

export const NewsletterInput = styled.input`
  border: none;
  box-sizing: border-box;
  font-size: 1.7em;
  height: 2em;
  outline: none;
  padding: 0 0.5em;
  width: 65%;

  @media screen and (max-width: ${theme.breakpoints.lg}) {
    margin: 0;
    width: 20em;
    border-radius: 5px;
  }

  @media screen and (max-width: ${theme.breakpoints.md}) {
    width: 85%;
  }
`;

export const NewsletterButton = styled.button`
  background-color: ${theme.colors.tertiary};
  border: none;
  color: ${theme.colorsNegative.primary};
  font-size: 1.4em;
  margin-left: 0.2em;
  width: 33%;

  &:hover {
    background-color: ${theme.colors.secondary};
    cursor: pointer;
  }

  @media screen and (max-width: ${theme.breakpoints.lg}) {
    border-radius: 5px;
    height: 2.5em;
    margin: 0.3em auto;
  }
`;