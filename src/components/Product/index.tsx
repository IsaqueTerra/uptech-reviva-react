import { IProducts } from "contracts";
import Sizes from "./Button_size_list";
import Images from "./Images";
import Button from "./Button";
import Name from "./Name";
import Price from "./Price";
import { useCartContext } from "contexts/cart.context";
import { ProductsSpecification, WrapperProduct } from "./styles";

const Product = (product: IProducts) => {
  const { addInCart } = useCartContext(product);

  return (
    <WrapperProduct>
      <Sizes id={product.id} listSizes={product.size_available} />
      <Images images={product.images} id={product.id} />
      <ProductsSpecification>
        <Name name={product.name} />
        <Price price={product.price} />
      </ProductsSpecification>
      <Button
        unavailable={product.quantity_available <= 0}
        onClick={() => {
          addInCart(product);
        }}
      >
        POR NA SACOLA
      </Button>
    </WrapperProduct>
  );
};

export default Product;
