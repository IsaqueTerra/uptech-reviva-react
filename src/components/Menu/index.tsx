import { useState } from "react";
import styled, { css } from "styled-components";
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

interface MenuNavegationProps {
  isOpen: boolean;
}

const MenuNavegationItems = styled.ul<MenuNavegationProps>`
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
  const listLink = [
    { href: "#", content: "Página Inicial" },
    { href: "#", content: "Moda Masculina" },
    { href: "#", content: "Moda Feminina" },
    { href: "#", content: "Moda Infantíl" },
    { href: "#", content: "Manual de Moda" },
  ];
  return (
    <MenuNavegation>
      <ButtonMobile onClick={() => setOpenMenu(!openMenu)} />
      <MenuNavegationItems isOpen={openMenu}>
        {listLink.map((link, index) => {
          return (
            <li key={index}>
              <ItemLink href={link.href}>{link.content}</ItemLink>
            </li>
          );
        })}
      </MenuNavegationItems>
    </MenuNavegation>
  );
};

export default Menu;
