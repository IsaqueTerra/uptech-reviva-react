import { IProducts } from "contracts";
import Main from "../components/Main";

interface HomeProps {
  listProduct: IProducts[];
}

export default function Home({ listProduct }: HomeProps) {
  return (
      <Main listProduct={listProduct} />
  );
}

export const getStaticProps = async () => {
  const response = await fetch("http://localhost:3000/api");
  const data: IProducts[] = await response.json();

  return {
    props: {
      listProduct: data,
    },
  };
};
