import { IProducts } from "contracts";
import productList from "data";
import React, { createContext, useContext, useState } from "react";


interface IProductContext {
  listProduct: IProducts[];
  setListProduct: React.Dispatch<React.SetStateAction<IProducts[]>>;
}

export const ProductContext = createContext<IProductContext>(
  {} as IProductContext
);

ProductContext.displayName = "ProductContext";

interface ProductProviderProps {
  children: React.ReactNode;
}

const ProductProvider = ({ children }: ProductProviderProps) => {
  const [listProduct, setListProduct] = useState(productList);

  return (
    <ProductContext.Provider value={{ listProduct, setListProduct }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProductContext = () => {
  const { listProduct, setListProduct } = useContext(ProductContext);

  const updateQttAvailable = (product: IProducts, quantity?: number) => {
    const newListProduct = [...listProduct];
    const indexItem = listProduct.findIndex(
      (item: IProducts) => item.id === product.id
    );

    if (quantity) {
      const total = product.quantity_available - quantity;
      newListProduct[indexItem].quantity_available = total;
    } else if (newListProduct[indexItem].quantity_available > 0) {
      newListProduct[indexItem].quantity_available -= 1;
    }

    setListProduct(newListProduct);
  };
  return { updateQttAvailable };
};

export default ProductProvider;
