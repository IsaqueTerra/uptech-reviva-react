import { IProducts } from "contracts";
import Images from "../../Product/Images";
import Sizes from "../../Product/Button_size_list";
import ProductFeatures from "./Product_features";
import { useRecoilState } from "recoil";
import { cartListState, inventoryState } from "state/atoms";
import { useEffect, useState } from "react";
import styled from "styled-components";
import theme from "styles/global";

const CartProduct = styled.section`
  column-gap: 2em;
  display: grid;
  grid-template-areas: "image";
  grid-template-columns: 160px 18% 20% 10% 10em 10%;
  grid-template-rows: 200px 20em;
  height: 22em;

  @media screen and(max-width: ${theme.breackpoints.xl}) {
    column-gap: 1em;
    grid-template-columns: 160px 19% 17% 8% 10em 10%;
  }

  @media screen and(max-width: ${theme.breackpoints.md}) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto auto auto auto;
    grid-template-areas:
      "image"
      "image"
      "image"
      "image"
      "image";
    height: auto;
    margin: 1em 0;
  }

  @media screen and(max-width: ${theme.breackpoints.sm}) {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto auto auto auto;
    grid-template-areas: "image ";
    row-gap: 1em;
  }
`;

const Description = styled.p`
  font-size: 1.5em;
  margin: 0.2em 0;
`;

const Value = styled.p`
  font-size: 1.5em;
  margin: 0.2em 0;
`;

const Quantity = styled.input`
  border-radius: 0.3em;
  border: 1px solid;
  font-size: 1.5em;
  margin: 0.2em auto;
  text-align: center;
  width: 3em;
  @media screen and(max-width: ${theme.breackpoints.md}) {
    margin: 0.2em 0;
  }
`;

const Subtotal = styled.p`
  font-size: 1.5em;
  margin: 0.2em 0;
`;

const ProductCart = (product: IProducts) => {
  const [value, setValue] = useState(product.items_cart);
  const [cartList, setCartList] = useRecoilState(cartListState);
  const [inventaryList, setInventaryList] = useRecoilState(inventoryState);
  const newCartList: IProducts[] = JSON.parse(JSON.stringify(cartList));
  const newInventaryList: IProducts[] = JSON.parse(
    JSON.stringify(inventaryList)
  );

  const updateQuantityCart = (value: number) => {
    const indexItem = newCartList.findIndex(
      (item: IProducts) => item.id === product.id
    );
    newCartList[indexItem].items_cart = value;
    return newCartList;
  };

  const setUpdateQtyCart = (value: number) => {
    setCartList(() => updateQuantityCart(value));
  };

  const updateInInventary = (value: number) => {
    const indexItem = newInventaryList.findIndex(
      (item: IProducts) => item.id === product.id
    );
    const updatedValue = product.quantity_avaliable - value;
    newInventaryList[indexItem].quantity_avaliable = updatedValue;
    return newInventaryList;
  };

  const setUpdateInInventary = (value: number) => {
    setInventaryList(() => updateInInventary(value));
  };

  useEffect(() => {
    setValue(product.items_cart);
  }, [cartList]);

  return (
    <CartProduct>
      <Images images={product.images} />
      <ProductFeatures title="Produto">
        <Description>{product.name}</Description>
      </ProductFeatures>
      <ProductFeatures title="Tamanho escolhido">
        <Sizes id={product.id} listSizes={product.size_avaliable} />
      </ProductFeatures>
      <ProductFeatures title="Valor">
        <Value>R$ {product.price.toFixed(2)}</Value>
      </ProductFeatures>
      <ProductFeatures title="Quantidade">
        <Quantity
          id={(3).toString()}
          type="number"
          max={product.quantity_avaliable}
          value={product.items_cart}
          onChange={(event) => {
            if (Number(event.target.value) > product.quantity_avaliable) {
              event.target.value = product.quantity_avaliable.toString();
            }
            setUpdateInInventary(Number(event.target.value));
            setUpdateQtyCart(Number(event.target.value));
          }}
        />
      </ProductFeatures>
      <ProductFeatures title="Subtotal">
        <Subtotal>R$ {(product.price * value!).toFixed(2)}</Subtotal>
      </ProductFeatures>
    </CartProduct>
  );
};

export default ProductCart;
