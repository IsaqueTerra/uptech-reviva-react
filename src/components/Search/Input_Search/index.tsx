import styled from "styled-components";
import theme from "styles/global";

const SearchField = styled.input`
  border: solid 1px ${theme.colors.quaternary};
  box-sizing: border-box;
  font-size: 1.8em;
  padding: 0 1.2em;
  width: 90%;

  &::placeholder {
    @media screen and (max-width: ${theme.breackpoints.sm}) {
      font-size: 0.8em;
    }
  }

  @media screen and (max-width: ${theme.breackpoints.sm}) {
    font-size: 1.5em;
  }

  @media screen and (max-width: ${theme.breackpoints.sm}) {
    padding: 0.2em;
    width: 100%;
  }
`;

const Search = ({ placeholder }: { placeholder: string }) => (
  <SearchField
    placeholder={placeholder}
    type="text"
  />
);

export default Search;
