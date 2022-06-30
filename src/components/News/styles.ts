import styled from "styled-components";
import theme from "styles/global";

export const ContentNewsBlog = styled.article`
  display: grid;
  gap: 2em;
  grid-template-columns: repeat(4, 24%);
  grid-template-rows: repeat(5, auto);
  grid-template-areas:
    "title title title title"
    "banner-1 banner-1 banner-2 text-2"
    "banner-1 banner-1 banner-2 text-2"
    "banner-1 banner-1 banner-3 text-3"
    "text-1 text-1 banner-3 text-3";

  @media screen and (max-width: ${theme.breakpoints.md}) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(7, auto);
    grid-template-areas:
      "title"
      "banner-1"
      "text-1"
      "banner-2"
      "text-2"
      "banner-3"
      "text-3";
  }
`;

export const NewsBlogTitle = styled.h3`
  font-size: 2.2em;
  grid-area: title;
  margin: 2em 0 0 0;

  @media screen and (max-width: ${theme.breakpoints.md}) {
    font-size: 1.8em;
  }
`;

export const NewsBlogImageMain = styled.img`
  grid-area: banner-1;
  height: 100%;
  width: 100%;
`;

export const NewsBlogTextMain = styled.a`
  color: inherit;
  font-size: 2.2em;
  grid-area: text-1;
  text-decoration: none;
  width: 90%;

  @media screen and (max-width: ${theme.breakpoints.lg}) {
    font-size: 1.6em;
  }

  @media screen and (max-width: ${theme.breakpoints.md}) {
    font-size: 2em;
  }
`;

export const NewsBlogImage2 = styled.img`
  grid-area: banner-2;
  width: 100%;
`;

export const NewsBlogText2 = styled.a`
  color: inherit;
  font-size: 2em;
  grid-area: text-2;
  text-decoration: none;

  @media screen and (max-width: ${theme.breakpoints.lg}) {
    font-size: 1.6em;
  }

  @media screen and (max-width: ${theme.breakpoints.md}) {
    font-size: 2em;
  }
`;

export const NewsBlogImage3 = styled.img`
  grid-area: banner-3;
  width: 100%;
`;

export const NewsBlogText3 = styled.a`
  color: inherit;
  font-size: 2em;
  grid-area: text-3;
  text-decoration: none;

  @media screen and (max-width: ${theme.breakpoints.lg}) {
    font-size: 1.6em;
  }

  @media screen and (max-width: ${theme.breakpoints.md}) {
    font-size: 2em;
  }
`;