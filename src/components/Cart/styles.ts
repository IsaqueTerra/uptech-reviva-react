import styled from "styled-components";
import theme from "styles/global";

export const ContentCart = styled.section`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 80%;

  @media (max-width: ${theme.breakpoints.lg}) {
    width: 100%;
  }

  @media (max-width: ${theme.breakpoints.md}) {
    justify-content: flex-start;
  }
`;

export const CarTitle = styled.h1`
  font-size: 2.5em;
  margin: 0.5em 0;
`;
