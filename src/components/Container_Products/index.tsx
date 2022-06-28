import { ReactNode } from "react";
import styled from "styled-components";
import theme from "styles/global";
import Caption from "../Product/Caption";

const ContentProduct = styled.section`
  display: flex;

  @media screen and (max-width: ${theme.breackpoints.md}) {
    flex-wrap: wrap;
  }
`;
interface IContentProducts {
  children: ReactNode;
  title: string;
}

const ContentProducts = (props: IContentProducts) => {
  return (
    <ContentProduct>
      <Caption>{props.title}</Caption>
      {props.children}
    </ContentProduct>
  );
};

export default ContentProducts;
