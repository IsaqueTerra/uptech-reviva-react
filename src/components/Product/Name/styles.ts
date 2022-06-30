import styled from "styled-components";
import theme from "styles/global";

export const SpecificationName = styled.h4`
font-weight: 400;
height: 3.5em;
margin: 0.3em 0;
overflow: hidden;

@media screen and (max-width: ${theme.breakpoints.xxl}) {
  font-size: 0.9em;
}

@media screen and (max-width: ${theme.breakpoints.lg}) {
  font-size: 0.8em;
}
`;