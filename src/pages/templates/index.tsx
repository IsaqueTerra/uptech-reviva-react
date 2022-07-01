import Footer from "components/Footer";
import Header from "components/Header";
import Menu from "components/Menu";
import ContainerSearch from "components/Search";
import styled from "styled-components";
import theme from "styles/global";
interface IPageTemplate {
  children: React.ReactNode;
}

const Container = styled.div`
  box-sizing: border-box;
  margin: auto;
  max-width: ${theme.breakpoints.xxl};
  padding: 0 4em;
  position: relative;

  @media screen and (max-width: ${theme.breakpoints.lg}) {
    padding: 0 1em;
    margin: auto;
  }
`;

const PageTemplate = ({ children }: IPageTemplate) => {
  return (
    <>
      <Header />
      <Menu />
      <ContainerSearch />
      <Container>{children}</Container>
      <Footer />
    </>
  );
};
export default PageTemplate;
