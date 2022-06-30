import Logo from "../Logo";
import { BannerText, WrapperBanner, WrapperLogoBanner } from "./styles";

const Banner = () => (
  <WrapperBanner title="Ir para menu da moda">
    <BannerText>
      Fique por dentro de tudo que há de novidade no mundo da moda!
      <br />
      Baixe já nosso manual de moda!
    </BannerText>
    <WrapperLogoBanner>
      <Logo />
    </WrapperLogoBanner>
  </WrapperBanner>
);

export default Banner;
