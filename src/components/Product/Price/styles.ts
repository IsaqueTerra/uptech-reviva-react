import styled from "styled-components";
import theme from "styles/global";

export const SpecificationValue = styled.p`
font-family: "Franklin Gothic Medium";
font-size: 1.1em;
font-weight: bold;
margin: 0 0 0.5em 0;

@media screen and (max-width: ${theme.breakpoints.sm}) {
  font-size: 1em;
}
`;
