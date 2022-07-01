import { useCountQttInCart } from "contexts/cart.context";
import Link from "next/link";
// import { Link } from "react-router-dom";
import { HeaderCart } from "./styles";

const Cart = () => {
  const { countItemsCart } = useCountQttInCart();
  return (
    <Link href="/cart">
      <HeaderCart
        quantity_cart={countItemsCart()}
        aria-label="carrinho de compra"
      />
    </Link>
  );
};
export default Cart;
