import ProductCart from "./index";
import { useContext } from "react";
import { CartContext } from "contexts/cart.context";

const ProductListSection = () => {
  const { cartList } = useContext(CartContext);

  return (
    <>
      {cartList.map((product) => {
        if (product.items_cart! > 0) {
          return <ProductCart {...product} key={product.id} />;
        }
      })}
    </>
  );
};

export default ProductListSection;
