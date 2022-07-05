import { IProducts } from "contracts";
import Details from "components/Details";
import { GetStaticPaths, GetStaticProps } from "next";

interface PageDetailsProps {
  product: IProducts;
  listProduct: IProducts[]
}

export default function PageDetails({ product, listProduct }: PageDetailsProps) {
  return <Details product={product} listProduct={listProduct} />;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await fetch("http://localhost:3000/api");
  const data: IProducts[] = await response.json();
  const paths = data.map(product => {
    return { params: { details: product.id.toString() }}
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const details = context.params!.details;

  const responseList = await fetch(`http://localhost:3000/api`);
  const listProduct = await responseList.json();

  const response = await fetch(`http://localhost:3000/api/${details}`);
  const product = await response.json();

  return {
    props: {
      product: product,
      listProduct: listProduct
    },
  };
};



