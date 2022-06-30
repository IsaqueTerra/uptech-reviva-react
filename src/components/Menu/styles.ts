import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import theme from "styles/global";

export const MenuNavegation = styled.nav`
  background-color: ${theme.colors.primary};
  color: ${theme.colorsNegative.primary};

  @media screen and (max-width: ${theme.breakpoints.md}) {
    display: flex;
    height: 6.2em;
  }
`;

interface MenuNavegationProps {
  isOpen: boolean;
}

export const MenuNavegationItems = styled.ul<MenuNavegationProps>`
  align-items: center;
  display: flex;
  font-size: 1.8em;
  font-weight: 700;
  height: 3.5em;
  justify-content: space-around;
  list-style: none;
  margin: auto;
  max-width: ${theme.breakpoints.xxl};
  padding: 0;

  @media screen and (max-width: ${theme.breakpoints.md}) {
    background-color: ${theme.colors.primary};
    border-radius: 0 0 30px;
    font-size: 1.6em;
    flex-direction: column;
    height: 50vh;
    left: -100vh;
    line-height: 1.5em;
    margin-top: 3.2em;
    padding: 0 2em;
    position: absolute;
    text-align: center;
    transition: 0.5s all;
    width: 40%;
    z-index: 99;

    ${({ isOpen }) =>
      isOpen &&
      css`
        left: 0vh;
      `}
  }
`;

export const ItemLink = styled(Link)`
  color: inherit;
  text-decoration: none;

  &:hover {
    transform: scale(1.05);
    transition: 0.2s linear;
  }

  @media screen and (max-width: ${theme.breakpoints.md}) {
    width: 100%;
  }
`;