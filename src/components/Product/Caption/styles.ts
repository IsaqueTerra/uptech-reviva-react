import styled from "styled-components";
import theme from "styles/global";

export const ProductsTitle = styled.h2`
position: absolute;
line-height: 1;

@media screen and (max-width: ${theme.breakpoints.md}) {
  margin-left: 0.6em;
}
@media screen and (max-width: ${theme.breakpoints.sm}) {
  font-size: 1.3em;
}
`;

export const ProductsLink = styled.a`
color: inherit;
font-size: 1.3em;
text-decoration: none;
`;
