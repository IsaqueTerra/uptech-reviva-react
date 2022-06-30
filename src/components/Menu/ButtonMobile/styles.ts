import styled from "styled-components";
import theme from "styles/global";

export const MenuNavegationButton = styled.button`
  display: none;

  @media screen and (max-width: ${theme.breakpoints.md}) {
    background: no-repeat left url(../../icons/logo-menu.svg);
    border: none;
    color: ${theme.colorsNegative.primary};
    display: inline-block;
    font-size: 1.7em;
    font-weight: bold;
    margin: 0 1em;
    text-align: end;
    width: 5em;
  }

  &:hover {
    @media screen and (max-width: ${theme.breakpoints.md}) {
      cursor: pointer;
    }
  }
`;