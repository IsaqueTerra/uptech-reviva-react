import styled from "styled-components";
import theme from "styles/global";

export const SearchField = styled.input`
border: solid 1px ${theme.colors.quaternary};
box-sizing: border-box;
font-size: 1.8em;
padding: 0 1.2em;
width: 90%;

&::placeholder {
  @media screen and (max-width: ${theme.breakpoints.sm}) {
    font-size: 0.8em;
  }
}

@media screen and (max-width: ${theme.breakpoints.sm}) {
  font-size: 1.5em;
}

@media screen and (max-width: ${theme.breakpoints.sm}) {
  padding: 0.2em;
  width: 100%;
}
`;