import styled, { css } from "styled-components";
import theme from "styles/global";

interface FooterLinksProps {
    gridArea?: string;
  }
  
 export const FooterLinks = styled.ul<FooterLinksProps>`
    grid-area: ${(props) => props.gridArea};
    justify-self: center;
    list-style: none;
    margin: 0;
    padding: 0;
    width: 90%;
    word-wrap: break-word;
  
    &::first-line {
      font-weight: bold;
    }
  
    @media screen and (max-width: ${theme.breakpoints.lg}) {
      text-align: center;
      width: 100%;
    }
  `;
  
 export const LinksItem = styled.li`
    font-size: 1.8em;
    margin: 0 0 0.7em 0;
  `;
  interface LinkProps {
    urlIcon?: string;
  }
  
 export const Link = styled.a<LinkProps>`
    color: inherit;
    text-decoration: none;
  
    &:hover {
      font-weight: bold;
    }
  
    ${({ urlIcon }) =>
      urlIcon &&
      css`
        &::after {
          background: center/100% url(${urlIcon}) no-repeat;
          content: "";
          display: inline-block;
          height: 0.8em;
          margin: 0 0.2em;
          width: 0.8em;
        }
      `}
  `;
