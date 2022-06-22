import { IProducts } from "contracts";
import Sizes from "./Button_size_list";
import Images from "./Images";
import Button from "./Button";
import Name from "./Name";
import Price from "./Price";
import { useRecoilState } from "recoil";
import { cartListState, inventoryState } from "state/atoms";
import styled from "styled-components";
import theme from "styles/global";

const ProductsEspecification = styled.div`
  color: inherit;
  font-size: 1.8em;
  grid-area: details;
  text-decoration: none;
`;

const WrapperProduct = styled.div`
  display: grid;
  grid-template: auto 4em auto 4em / 50% 50%;
  grid-template-areas:
    "image image"
    "image image"
    "details details"
    "button button";
  margin: 4.2em 2vw;
  width: 100%;

  &:nth-child(4) {
    @media screen and (max-width: ${theme.breackpoints.lg}) {
      display: none;
    }

    @media screen and (max-width: ${theme.breackpoints.md}) {
      display: grid;
    }
  }

  &:nth-child(5) {
    margin-right: 0;

    @media screen and (max-width: ${theme.breackpoints.md}) {
      margin-right: auto;
    }
  }

  &:nth-child(2) {
    margin-left: 0;

    @media screen and (max-width: ${theme.breackpoints.md}) {
      margin-left: auto;
    }
  }

  @media screen and (max-width: ${theme.breackpoints.lg}) {
    margin: 4.2em 2vw;
  }

  @media screen and (max-width: ${theme.breackpoints.md}) {
    margin: 5em auto 0 auto;
    width: 45%;

  }

  @media screen and (max-width: ${theme.breackpoints.lg}) {
    width: 45%;
  }
`;

export const findItemById = (list: IProducts[], id: number) =>
  list.some((item) => item.id === id);

const Product = (product: IProducts) => {
  const [cartList, setCartList] = useRecoilState(cartListState);
  const [inventoryList, setInventoryList] = useRecoilState(inventoryState);

  const newProduct = {...product};
  const newCartList = JSON.parse(JSON.stringify(cartList));
  const newInventoryList = JSON.parse(JSON.stringify(inventoryList));

  const incrementInCart = (list: IProducts[], id: number) => {
    return list.map((product: IProducts) => {
      if (product.id === id && product.quantity_avaliable > product.items_cart!)
        product.items_cart!++;
      return product;
    });
  };

  const addProductToCart = () => {
    if (findItemById(cartList, newProduct.id)) {
      setCartList(() => incrementInCart(newCartList, product.id));
    } else {
      newProduct.items_cart = 1;
      setCartList([...cartList, newProduct]);
    }
  };

  const itemsIsAvailable = (list: IProducts[], id: number) =>
    list.reduce(
      (acc, item) =>
        item.quantity_avaliable > 0 && item.id === id ? true : acc,
      false
    );

  const condition = itemsIsAvailable(inventoryList, product.id);

  const decrementInInventary = (list: IProducts[], id: number) => {
    return list.map((product: IProducts) => {
      if (product.id === id) product.quantity_avaliable--;
      return product;
    });
  };

  const decreaseProductToInventary = () => {
    if (condition) {
      setInventoryList(() =>
        decrementInInventary(newInventoryList, product.id)
      );
    }
  };

  return (
    <WrapperProduct>
      <Sizes id={product.id} listSizes={product.size_avaliable} />
      <Images images={product.images} id={product.id} />
      <ProductsEspecification>
        <Name name={product.name} />
        <Price price={product.price} />
      </ProductsEspecification>
      <Button
        unvaliable={!condition}
        onClick={() => {
          addProductToCart();
          decreaseProductToInventary();
        }}
      >
        POR NA SACOLA
      </Button>
    </WrapperProduct>
  );
};

export default Product;
