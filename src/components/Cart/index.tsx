import { CartContext } from "contexts/cart.context";
import { useContext } from "react";
import ProductListSection from "./Product_cart/ProductListSection";
import { CarTitle, ContentCart } from "./styles";
import Subtotal from "./Subtotal";

const CartMain = () => {
  const {cartList} = useContext(CartContext);
  const containsInCart = cartList.length !== 0;
  return (
    <ContentCart>
      {containsInCart ? (
        <>
          <CarTitle>Minha Sacola</CarTitle>
          <ProductListSection cartList={cartList} />
          <Subtotal cartList={cartList} />
        </>
      ) : (
        <CarTitle>Nenhum produto no carrinho</CarTitle>
      )}
      {containsInCart && <Subtotal cartList={cartList} />}
    </ContentCart>
  );
};

export default CartMain;
