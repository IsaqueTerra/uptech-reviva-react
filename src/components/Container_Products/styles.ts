import styled from "styled-components";
import theme from "styles/global";

export const ContentProduct = styled.section`
display: flex;

@media screen and (max-width: ${theme.breakpoints.md}) {
  flex-wrap: wrap;
}
`;