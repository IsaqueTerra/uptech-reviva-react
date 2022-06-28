import styled from "styled-components";
import theme from "styles/global";

export const WrapperBanner = styled.div`
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
  @media screen and (max-width: ${theme.breakpoints.xl}) {
    height: 15em;
  }

  @media screen and (max-width: ${theme.breakpoints.lg}) {
    height: 12em;
  }

  @media screen and (max-width: ${theme.breakpoints.md}) {
    background: left/100% no-repeat url("../../images/banners/banner-small.jpg");
    height: 18em;
    justify-content: flex-end;
  }

  @media screen and (max-width: ${theme.breakpoints.sm}) {
    height: 12em;
  }
`;

export const BannerText = styled.p`
  font-size: 2em;
  letter-spacing: 0.5em;
  text-align: center;

  &::first-line {
    letter-spacing: 0;
  }

  @media screen and (max-width: ${theme.breakpoints.xl}) {
    font-size: 1.6em;
  }

  @media screen and (max-width: ${theme.breakpoints.lg}) {
    font-size: 1.2em;
  }

  @media screen and (max-width: ${theme.breakpoints.md}) {
    display: none;
    font-size: 1.6em;
    letter-spacing: normal;
    margin: 0 1em 3em 0;
    width: 50%;
  }

  @media screen and (max-width: ${theme.breakpoints.sm}) {
    display: none;
  }
`;

export const WrapperLogoBanner = styled.div`
  bottom: 0;
  font-size: 0.9em;
  margin: 1em;
  position: absolute;
  right: 0;
  text-align: end;

  @media screen and (max-width: ${theme.breakpoints.xl}) {
    font-size: 0.7em;
  }

  @media screen and (max-width: ${theme.breakpoints.lg}) {
    font-size: 0.5em;
  }

  @media screen and (max-width: ${theme.breakpoints.sm}) {
    display: none;
  }
`;
