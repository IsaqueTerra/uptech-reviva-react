import styled from "styled-components";
import theme from "styles/global";

export const HeaderStyle = styled.header`
  align-items: center;
  box-sizing: border-box;
  display: flex;
  height: 18em;
  justify-content: space-between;
  margin: auto;
  max-width: ${theme.breakpoints.xxl};
  padding: 0 6em;

  @media screen and (max-width: ${theme.breakpoints.lg}) {
    padding: 0 3em;
  }
`;
