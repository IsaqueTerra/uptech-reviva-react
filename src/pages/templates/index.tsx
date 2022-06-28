import Footer from "components/Footer";
import Header from "components/Header";
import Menu from "components/Menu";
import ContainerSearch from "components/Search";
import styled from "styled-components";
import theme from "styles/global";
interface IPageTemplate {
  children: React.ReactNode;
  title: string;
}

const Container = styled.div`
  box-sizing: border-box;
  margin: auto;
  max-width: ${theme.breackpoints.xxl};
  padding: 0 4em;
  position: relative;

  @media screen and (max-width: ${theme.breackpoints.lg}) {
    padding: 0 1em;
    margin: auto;
  }
`;

const PageTemplate = ({ title, children }: IPageTemplate) => {
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
