import Cart from "./Cart";
import Logo from "../Logo";
import styled from "styled-components";
import theme from "styles/global";

const HeaderStyle = styled.header`
  align-items: center;
  box-sizing: border-box;
  display: flex;
  height: 18em;
  justify-content: space-between;
  margin: auto;
  max-width: ${theme.breackpoints.xxl};
  padding: 0 6em;

  @media screen and (max-width: ${theme.breackpoints.lg}) {
    padding: 0 3em;
  }
`;

const Header = () => {
  return (
    <HeaderStyle>
      <Logo />
      <Cart />
    </HeaderStyle>
  );
};

export default Header;
