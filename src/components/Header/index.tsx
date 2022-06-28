import Cart from "./Cart";
import Logo from "../Logo";
import { HeaderStyle } from "./styles";

const Header = () => {
  return (
    <HeaderStyle>
      <Logo />
      <Cart />
    </HeaderStyle>
  );
};

export default Header;
