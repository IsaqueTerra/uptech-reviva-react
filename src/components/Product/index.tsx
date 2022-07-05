import { IProducts } from "contracts";
import Sizes from "./Button_size_list";
import Images from "./Images";
import Button from "./Button";
import Name from "./Name";
import Price from "./Price";
import { ProductsSpecification, WrapperProduct } from "./styles";
import { useContext, useState } from "react";
import { CartContext } from "contexts/cart.context";
import { addInCart } from "services/cart.services";

const Product = (product: IProducts) => {
  const { setCartList } = useContext(CartContext);
  const [status, setStatus] = useState(false);
  return (
    <WrapperProduct>
      <Sizes id={product.id} listSizes={product.size_available} />
      <Images images={product.images} id={product.id} />
      <ProductsSpecification>
        <Name name={product.name} />
        <Price price={product.price} />
      </ProductsSpecification>
      <Button
        onClick={() => {
          addInCart(product, setCartList, setStatus);
        }}
        unavailable={status}
      >
        POR NA SACOLA
      </Button>
    </WrapperProduct>
  );
};

export default Product;
