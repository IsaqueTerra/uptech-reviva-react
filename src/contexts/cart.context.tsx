// import productList from "data";
import { IProducts } from "contracts";
import React, { createContext, useContext, useEffect, useState } from "react";
import { ProductContext, useProductContext } from "./product.context";

interface ICartContext {
  cartList: IProducts[];
  setCartList: React.Dispatch<React.SetStateAction<IProducts[]>>;
}

const CartDefaultContext: IProducts[] = [];

export const CartContext = createContext<ICartContext>({} as ICartContext);

CartContext.displayName = "CartContext";

interface CartProviderProps {
  children: React.ReactNode;
}

export default function CartProvider({ children }: CartProviderProps) {
  const [cartList, setCartList] = useState(CartDefaultContext);

  return (
    <CartContext.Provider value={{ cartList, setCartList }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCartContext = (product: IProducts) => {
  const { cartList, setCartList } = useContext(CartContext);
  const { updateQttAvailable } = useProductContext();
  const [_, setQuantityInCart] = useState(product.items_cart);
  const { listProduct } = useContext(ProductContext);

  useEffect(() => {
    setQuantityInCart(product.items_cart);
  }, [cartList]);

  const indexItem = listProduct.findIndex(
    (item: IProducts) => item.id === product.id
  );

  const addInCart = (product: IProducts) => {
    const newProductInCart = { ...product };
    const productInCart = cartList.find(
      (item: IProducts) => item.id === newProductInCart.id
    );

    const incrementInCart = (listCart: IProducts[], id: number) => {
      return listCart.map((productCart: IProducts) => {
        if (
          productCart.id === id &&
          productCart.quantity_available > productCart.items_cart!
        )
          productCart.items_cart!++;
        return productCart;
      });
    };

    if (productInCart) {
      setCartList(incrementInCart(cartList, product.id));
    } else if (listProduct[indexItem].quantity_available > 0) {
      newProductInCart.items_cart = 1;
      setCartList([...cartList, newProductInCart]);
    }
    updateQttAvailable(product);
  };

  const updateQuantityCart = (quantity: number) => {
    const newCartList = [...cartList];

    const setUpdateQtyCart = (value: number) => {
      setCartList(() => updateQuantityCart(value));
    };

    const findIndexProductInList = (list: IProducts[]) =>
      list.findIndex((item: IProducts) => item.id === product.id);

    const updateQuantityCart = (value: number) => {
      const indexItem = findIndexProductInList(newCartList);

      if (value <= 0) {
        newCartList.splice(indexItem, 1);
      } else {
        newCartList[indexItem].items_cart = value;
      }
      return newCartList;
    };
    updateQttAvailable(product, quantity);
    return setUpdateQtyCart(quantity);
  };

  const finishPurchase = () => {
    setCartList([]);
  }

  return { addInCart, updateQuantityCart, finishPurchase };
};

export const useCountQttInCart = () => {
  const { cartList } = useContext(CartContext);
  const countItemsCart = () => {
    return cartList.reduce((acc, curr) => acc + curr.items_cart!, 0);
  };
  return { countItemsCart };
};
