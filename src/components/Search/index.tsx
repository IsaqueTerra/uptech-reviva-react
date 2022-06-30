import Search from "./Input_Search";
import styled from "styled-components";
import theme from "styles/global";
import { ContentSearch, SearchButton } from "./styles";

const ContainerSearch = () => {
  return (
    <ContentSearch>
      <Search placeholder="Faça sua busca aqui se já souber o que está procurando..." />
      <SearchButton />
    </ContentSearch>
  );
};

export default ContainerSearch;
