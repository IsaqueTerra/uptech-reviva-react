import styled from "styled-components";
import theme from "styles/global";

const FooterMenuNavegation = styled.ul`
  font-size: 1.8em;
  grid-area: menu;
  list-style: none;
  margin: 0;
  padding: 0;

  @media screen and (max-width: ${theme.breackpoints.lg}) {
    justify-self: center;
  }
`;

const MenuNavegationTitle = styled.li`
  font-weight: bold;
  margin: 0 0 0.7em 0;

  @media screen and (max-width: ${theme.breackpoints.lg}) {
    text-align: center;
  }
`;

const MenuNavegationItem = styled.li`
  margin: 0 0 0.7em 0;

  @media screen and (max-width: ${theme.breackpoints.lg}) {
    text-align: center;
  }
`;

const MenuNavegationLink = styled.a`
  color: inherit;
  text-decoration: none;

  &:hover {
    font-weight: bolder;
  }
`;

const MenuFooter = () => {
  return (
    <FooterMenuNavegation>
      <MenuNavegationTitle>Menu</MenuNavegationTitle>
      <MenuNavegationItem>
        <MenuNavegationLink href="#">Página Inicial</MenuNavegationLink>
      </MenuNavegationItem>
      <MenuNavegationItem>
        <MenuNavegationLink>Moda Masculina</MenuNavegationLink>
      </MenuNavegationItem>
      <MenuNavegationItem>
        <MenuNavegationLink>Moda Feminina</MenuNavegationLink>
      </MenuNavegationItem>
      <MenuNavegationItem>
        <MenuNavegationLink href="#">Moda Infantíl</MenuNavegationLink>
      </MenuNavegationItem>
      <MenuNavegationItem>
        <MenuNavegationLink href="#">Manual de Moda</MenuNavegationLink>
      </MenuNavegationItem>
    </FooterMenuNavegation>
  );
};

export default MenuFooter;
