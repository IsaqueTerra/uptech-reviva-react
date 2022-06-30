import { useState } from "react";
import ButtonMobile from "./ButtonMobile";
import { ItemLink, MenuNavegation, MenuNavegationItems } from "./styles";

const Menu = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const listLink = [
    { href: "/", content: "Página Inicial" },
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
              <ItemLink to={link.href}>{link.content}</ItemLink>
            </li>
          );
        })}
      </MenuNavegationItems>
    </MenuNavegation>
  );
};

export default Menu;
