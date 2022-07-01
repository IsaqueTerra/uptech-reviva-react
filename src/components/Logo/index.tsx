import Link from "next/link";
import { ContainerLogo, LogoBottom, LogoTop } from "./styles";

const Logo = () => {
  return (
    <Link href="/">
      <ContainerLogo
        onClick={() => {
          window.scrollTo(0, 0);
        }}
      >
        <LogoTop>Reviva Fashion</LogoTop>
        <LogoBottom>by RCHLO</LogoBottom>
      </ContainerLogo>
    </Link>
  );
};

export default Logo;
