import { Link } from "react-router-dom";
import styled from "styled-components";

const ContainerLogo = styled(Link)`
  color: inherit;
  grid-area: logo;
  text-align: end;
  text-decoration: none;
  width: 25.4em;

  @media screen and (max-width: $large) {
    margin: auto;
  }
`;

const LogoTop = styled.h1`
  font-size: 3.6em;
  margin: 0.4em 0 0 0;
`;

const LogoBottom = styled.span`
  font-size: 1.2em;
  font-weight: 600;
  margin: 0;
`;

const Logo = () => {
  return (
    <ContainerLogo
      to="/"
      onClick={() => {
        window.scrollTo(0, 0);
      }}
    >
      <LogoTop>Reviva Fashion</LogoTop>
      <LogoBottom>by RCHLO</LogoBottom>
    </ContainerLogo>
  );
};

export default Logo;
