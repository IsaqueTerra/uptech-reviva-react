import { ProductContext } from "contexts/product.context";
import Details from "components/Details/index";
import { useContext } from "react";
import { useParams } from "react-router-dom";

const PageDetails = () => {
  const { id } = useParams();
  const { listProduct } = useContext(ProductContext);
  const product = listProduct.find((item) => item.id === Number(id));
  if (!product) {
    return "";
  }
  return <Details product={product} />;
};

export default PageDetails;
