import styled from "styled-components";
import theme from "styles/global";

export const ContentSearch = styled.section`
  display: flex;
  height: 5em;
  margin: 1.2em auto;
  max-width: calc(${theme.breakpoints.xxl} - 8em);

  @media (max-width: ${theme.breakpoints.md}) {
    max-width: calc(${theme.breakpoints.xxl} - 8em);
  }
`;

export const SearchButton = styled.button`
  background: ${theme.colors.primary} center no-repeat
    url(../../icons/logo-search.svg);
  border: none;
  margin-left: 0.5%;
  width: 10%;

  &:hover {
    background-color: ${theme.colors.secondary};
    cursor: pointer;
  }

  @media screen and (max-width: ${theme.breakpoints.sm}) {
    display: none;
  }
`;