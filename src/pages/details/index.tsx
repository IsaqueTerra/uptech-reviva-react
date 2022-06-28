import Details from "components/Details/index";
import { useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { inventoryState } from "state/atoms";

const PageDetails = () => {
  const { id } = useParams();
  const productList = useRecoilValue(inventoryState);
  const product = productList.find((item) => item.id === Number(id));
  if (!product) {
    return "";
  }
  return <Details product={product} />;
};

export default PageDetails;
