import Search from "./Input_Search";
import styled from "styled-components";
import theme from "styles/global";

const ContentSearch = styled.section`
  display: flex;
  height: 5em;
  margin: 1.2em auto;
  max-width: calc(${theme.breackpoints.xxl} - 8em);

  @media (max-width: ${theme.breackpoints.md}) {
    max-width: calc(${theme.breackpoints.xxl} - 8em);
  }
`;

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

  @media screen and (max-width: ${theme.breackpoints.sm}) {
    display: none;
  }
`;

const ContainerSearch = () => {
  return (
    <ContentSearch>
      <Search placeholder="Faça sua busca aqui se já souber o que está procurando..." />
      <SearchButton />
    </ContentSearch>
  );
};

export default ContainerSearch;
