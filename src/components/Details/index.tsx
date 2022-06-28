import Banner from "components/Banner";
import ProductList from "components/Main/Product_List";
import Button from "components/Product/Button";
import Sizes from "components/Product/Button_size_list";
import Images from "components/Product/Images";
import { IProducts } from "contracts";
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { postListState } from "state/atoms";
import styled from "styled-components";
import theme from "styles/global";

const ContainerDetails = styled.section`
  box-sizing: border-box;
  display: grid;
  gap: 2em;
  grid-template-areas:
    "image title"
    "image description"
    "image products"
    "image size"
    "image button";
  grid-template-columns: 35% calc(65% - 2em);
  grid-template-rows: 8% auto auto auto auto;
  margin: 5.2em auto;

  @media (max-width: ${theme.breackpoints.xl}) {
    font-size: 1em;
    grid-template-columns: 40% 55%;
    grid-template-rows: 8% auto auto auto auto;
  }

  @media (max-width: ${theme.breackpoints.lg}) {
    font-size: 0.8em;
  }

  @media (max-width: ${theme.breackpoints.md}) {
    font-size: 0.8em;
    grid-template-areas:
      "image title"
      "image description"
      "products products"
      "size size"
      "button button";
    grid-template-columns: 40% 60%;
    grid-template-rows: 12% auto auto auto auto;
    row-gap: 1em;
  }

  @media (max-width: ${theme.breackpoints.sm}) {
    grid-template-areas:
      "image"
      "title"
      "description"
      "products "
      "size"
      "button";
    grid-template-columns: 1fr;
    grid-template-rows: repeat(5, auto) 5em;
    margin: auto;
    row-gap: 1em;
  }
`;

const Title = styled.h2`
  font-size: 2.4em;
  grid-area: title;
  margin: 0;
  width: calc(100% - 1em);

  @media screen and(min-width: 0) {
    font-size: 2em;
  }
`;

const Description = styled.p`
  font-size: 2em;
  grid-area: description;
  margin: 0.5em 0;
  width: calc(100% - 1em);

  @media screen and(max-width: ${theme.breackpoints.xl}) {
    font-size: 1.7em;
    margin: 1em 0;
  }
`;
const DetailsImages = styled.div`
  align-items: center;
  display: flex;
  grid-area: products;
  height: auto;
  justify-content: space-between;
  width: calc(100% - 2em);
`;

const WrapperDetailsSizes = styled.div`
  grid-area: size;
  justify-self: "flex-start";
  align-self: "center";
  @media (max-width: ${theme.breackpoints.sm}) {
    font-size: 1.5em;
  }
`;

const WrapperDetailsButton = styled.div`
  align-self: flex-end;
  grid-area: button;
  height: 5em;
  width: 250px;
  
  @media (max-width: ${theme.breackpoints.sm}) {
    font-size: 1.5em;
    height: 4em;
    width: 100%;
  }
`;

interface IDetailsProps {
  product: IProducts;
}

const Details = ({ product }: IDetailsProps) => {
  const listProducts = useRecoilValue(postListState);

  const [images, setImages] = useState(product.images);

  useEffect(() => {
    setImages(product.images);
  }, [product.images]);

  const updateStateListImages = (position: number) => {
    const copyImages = [...images];
    copyImages.splice(0, 1);
    copyImages.unshift(images[position]);
    copyImages.splice(position, 1, images[0]);
    setImages(copyImages);
  };

  return (
    <>
      <ContainerDetails>
        <Title>{product.name}</Title>
        <Description>{product.description}</Description>
        <Images images={images} position={0} />
        <DetailsImages>
          <Images
            images={images}
            position={1}
            style={{ width: "18%" }}
            onClick={() => updateStateListImages(1)}
          />
          <Images
            images={images}
            position={2}
            style={{ width: "18%" }}
            onClick={() => updateStateListImages(2)}
          />
          <Images
            images={images}
            position={3}
            style={{ width: "18%" }}
            onClick={() => updateStateListImages(3)}
          />
          <Images
            images={images}
            position={4}
            style={{ width: "18%" }}
            onClick={() => updateStateListImages(4)}
          />
        </DetailsImages>
        <WrapperDetailsSizes>
          <Sizes id={product.id} listSizes={product.size_avaliable} />
        </WrapperDetailsSizes>
        <WrapperDetailsButton>
          <Button>POR NA SACOLA</Button>
        </WrapperDetailsButton>
      </ContainerDetails>
      <Banner />
      <ProductList
        products={listProducts}
        category="ultimos-lancamentos"
        titleBanner="Quem comprou este produto, também levou um desses para casa!"
      />
    </>
  );
};

export default Details;
