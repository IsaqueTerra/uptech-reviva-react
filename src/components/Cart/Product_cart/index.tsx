import { IProducts } from "contracts";
import Images from "../../Product/Images";
import Sizes from "../../Product/Button_size_list";
import ProductFeatures from "../Product_features";
import { useCartContext } from "contexts/cart.context";
import {
  CartProduct,
  Description,
  Quantity,
  Subtotal,
  Value,
  WrapperSize,
} from "./styles";

const ProductCart = (product: IProducts) => {
  const { updateQuantityCart } = useCartContext(product);
  return (
    <CartProduct>
      <Images images={product.images} position={0} />
      <ProductFeatures title="Produto">
        <Description>{product.name}</Description>
      </ProductFeatures>
      <ProductFeatures title="Tamanho escolhido">
        <WrapperSize>
          <Sizes id={product.id} listSizes={product.size_available} />
        </WrapperSize>
      </ProductFeatures>
      <ProductFeatures title="Valor">
        <Value>R$ {product.price.toFixed(2)}</Value>
      </ProductFeatures>
      <ProductFeatures title="Quantidade">
        <Quantity
          data-testid="quantity-test"
          id={(3).toString()}
          type="number"
          max={product.quantity_available}
          min={1}
          value={product.items_cart}
          onChange={(event) => {
            if (Number(event.target.value) > product.quantity_available) {
              event.target.value = product.quantity_available.toString();
            } else if (Number(event.target.value) == 0) {
              event.target.value = "1";
            }
            updateQuantityCart(Number(event.target.value));
          }}
        />
      </ProductFeatures>
      <ProductFeatures title="Subtotal">
        <Subtotal>
          R$ {(product.price * product.items_cart!).toFixed(2)}
        </Subtotal>
      </ProductFeatures>
    </CartProduct>
  );
};

export default ProductCart;
