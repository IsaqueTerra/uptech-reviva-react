import { ContainerLogo, LogoBottom, LogoTop } from "./styles";

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
