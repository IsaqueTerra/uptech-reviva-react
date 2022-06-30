import { ReactNode } from "react";
import Caption from "../Product/Caption";
import { ContentProduct } from "./styles";

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
