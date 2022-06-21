import styled from "styled-components";
import theme from "styles/global";

const SearchButton = styled.button`
  background: ${theme.colors.primary} center no-repeat
    url(../../icons/logo-search.svg);
  border: none;
  margin-left: 0.5%;
  width: 10%;

  &:hover {
    background-color: ${theme.colors.secondary};
    cursor: pointer;
  }

  @media screen and (max-width: $small) {
    display: none;
  }
`;

const ButtonSearch = () => (
  <SearchButton></SearchButton>
);

export default ButtonSearch;
