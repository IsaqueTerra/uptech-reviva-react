import classNames from "classnames";
import { useState } from "react";
import styled from "styled-components";
import theme from "styles/global";
import ButtonMobile from "./ButtonMobile";

const MenuNavegation = styled.nav`
  background-color: ${theme.colors.primary};
  color: ${theme.colorsNegative.primary};

  @media screen and (max-width: ${theme.breackpoints.md}) {
    display: flex;
    height: 6.2em;
  }
`;

const MenuNavegationItems = styled.ul`
  align-items: center;
  display: flex;
  font-size: 1.8em;
  font-weight: 700;
  height: 3.5em;
  justify-content: space-around;
  list-style: none;
  margin: auto;
  max-width: ${theme.breackpoints.xxl};
  padding: 0;

  @media screen and (max-width: ${theme.breackpoints.md}) {
    background-color: ${theme.colors.primary};
    border-radius: 0 0 30px;
    font-size: 1.6em;
    flex-direction: column;
    height: 50vh;
    left: -100vw;
    line-height: 1.5em;
    margin-top: 3.2em;
    padding: 0 2em;
    position: absolute;
    text-align: center;
    transition: 0.5s all;
    width: 40%;
    z-index: 999;
  }

  @media screen and (max-width: ${theme.breackpoints.md}) {
    left: 0;
  }
`;

const ItemLink = styled.a`
  color: inherit;
  text-decoration: none;

  &:hover {
    transform: scale(1.05);
    transition: 0.2s linear;
  }

  @media screen and (max-width: ${theme.breackpoints.md}) {
    width: 100%;
  }
`;

const Menu = () => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <MenuNavegation>
      <ButtonMobile onClick={() => setOpenMenu(!openMenu)} />
      <MenuNavegationItems>
        <li>
          <ItemLink href="#">Página Inicial</ItemLink>
        </li>
        <li>
          <ItemLink href="#">Moda Masculina</ItemLink>
        </li>
        <li>
          <ItemLink href="#">Moda Feminina</ItemLink>
        </li>
        <li>
          <ItemLink href="#">Moda Infantíl</ItemLink>
        </li>
        <li>
          <ItemLink href="#">Manual de Moda</ItemLink>
        </li>
      </MenuNavegationItems>
    </MenuNavegation>
  );
};

export default Menu;
