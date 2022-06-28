import { useCountQttInCart } from "contexts/cart.context";
import { Link } from "react-router-dom";
import { HeaderCart } from "./styles";

const Cart = () => {
  const { countItemsCart } = useCountQttInCart();

  return (
    <Link to="/cart">
      <HeaderCart
        quantity_cart={countItemsCart()}
        aria-label="carrinho de compra"
      />
    </Link>
  );
};
export default Cart;
