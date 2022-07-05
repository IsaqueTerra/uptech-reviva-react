import ProductCart from "./index";
import { IProducts } from "contracts";

interface ProductCartProps {
  cartList: IProducts[];
}

const ProductListSection = ({ cartList }: ProductCartProps) => {
  return (
    <>
      {cartList.map((product) => {
          return <ProductCart {...product} key={product.id} />;
      })}
    </>
  );
};

export default ProductListSection;
