import Search from "./Input_Search";
import ButtonSearch from "./Button_Search";
import styled from "styled-components";
import theme from "styles/global";

const ContentSearch = styled.section`
  display: flex;
  height: 5em;
  margin: 1.2em auto;
  max-width: calc(${theme.breackpoints.xxl} - 8em);
  padding: 0 4.2em;

  @media (max-width: $medium) {
    max-width: calc(${theme.breackpoints.xxl} - 8em);
    padding: 0 2em;
  }
`;

const ContainerSearch = () => {
  return (
    <ContentSearch>
      <Search placeholder="Faça sua busca aqui se já souber o que está procurando..." />
      <ButtonSearch />
    </ContentSearch>
  );
};

export default ContainerSearch;
