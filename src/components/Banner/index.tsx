import Logo from "../Logo";
import styled from "styled-components";
import theme from "styles/global";

const WrapperBanner = styled.div`
  align-items: center;
  background: left/cover url("../../images/banners/banner.jpg");
  color: inherit;
  display: flex;
  font-weight: bold;
  height: 20em;
  justify-content: center;
  margin: 2em 0;
  position: relative;
  text-decoration: none;
  text-shadow: 0 0 0.5em rgba(0, 0, 0, 0.5);
  &:hover {
    cursor: pointer;
  }
  @media screen and (max-width: ${theme.breackpoints.xl}) {
    height: 15em;
  }

  @media screen and (max-width: ${theme.breackpoints.lg}) {
    height: 12em;
  }

  @media screen and (max-width: ${theme.breackpoints.md}) {
    background: left/100% no-repeat url("../../images/banners/banner-small.jpg");
    height: 18em;
    justify-content: flex-end;
  }

  @media screen and (max-width: ${theme.breackpoints.sm}) {
    height: 12em;
  }
`;

const BannerText = styled.p`
  font-size: 2em;
  letter-spacing: 0.5em;
  text-align: center;

  &::first-line {
    letter-spacing: 0;
  }

  @media screen and (max-width: ${theme.breackpoints.xl}) {
    font-size: 1.6em;
  }

  @media screen and (max-width: ${theme.breackpoints.lg}) {
    font-size: 1.2em;
  }

  @media screen and (max-width: ${theme.breackpoints.md}) {
    display: none;
    font-size: 1.6em;
    letter-spacing: normal;
    margin: 0 1em 3em 0;
    width: 50%;
  }

  @media screen and (max-width: ${theme.breackpoints.sm}) {
    display: none;
  }
`;

const WrapperLogoBanner = styled.div`
  bottom: 0;
  font-size: 0.9em;
  margin: 1em;
  position: absolute;
  right: 0;
  text-align: end;

  @media screen and (max-width: ${theme.breackpoints.xl}) {
    font-size: 0.7em;
  }

  @media screen and (max-width: ${theme.breackpoints.lg}) {
    font-size: 0.5em;
  }

  @media screen and (max-width: ${theme.breackpoints.sm}) {
    display: none;
  }
`;

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
