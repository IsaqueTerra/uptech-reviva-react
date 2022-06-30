import { IProducts } from "contracts";
import { useContext } from "react";
import { CartContext, useCartContext } from "contexts/cart.context";
import { CartCheckout, CheckoutButton, CheckoutTotal, Price } from "./styles";

const Subtotal = () => {
  const { cartList } = useContext(CartContext);
  const { finishPurchase } = useCartContext({} as IProducts);
  const calculatesSubtotal = (list: IProducts[]) => {
    return list
      .reduce((acc, product) => {
        return (acc += product.price * product.items_cart!);
      }, 0)
      .toFixed(2);
  };

  return (
    <CartCheckout>
      <CheckoutTotal>Total R$ {calculatesSubtotal(cartList)}</CheckoutTotal>
      {cartList.map((product: IProducts) => {
        if (product.items_cart! > 0) {
          return (
            <Price key={product.id}>
              {product.items_cart} x {product.price.toFixed(2)} =
              {(product.items_cart! * product.price).toFixed(2)}
            </Price>
          );
        }
      })}
      <CheckoutButton onClick={finishPurchase} to="#">
        Ir para pagamento
      </CheckoutButton>
    </CartCheckout>
  );
};

export default Subtotal;
