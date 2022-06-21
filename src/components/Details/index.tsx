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
  grid-template-rows: auto auto auto auto auto;
  margin: 5.2em auto;
  width: ${theme.breackpoints.xxl};

  @media screen and(max-width: ${theme.breackpoints.xl}) {
    grid-template-columns: 40% 60%;
    grid-template-rows: 10% 30% 35% 13% 10%;
  }

  @media screen and(max-width: ${theme.breackpoints.lg}) {
    grid-template-areas:
      "image title"
      "image description"
      "products products"
      "size size"
      "button button";
    grid-template-columns: 40% 60%;
    grid-template-rows: 6em auto 30% 5% 10%;
    row-gap: 1em;
  }

  @media screen and(max-width: ${theme.breackpoints.md}) {
    grid-template-areas:
      "image"
      "title"
      "description"
      "products "
      "size"
      "button";
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, auto);
    margin: 0;
    row-gap: 1em;
    width: 100%;
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
  width: 100%;
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
        <Sizes
          id={product.id}
          listSizes={product.size_avaliable}
          style={{
            gridArea: "size",
            justifySelf: "flex-start",
            alignSelf: "center",
          }}
        />
        <Button
          classItem="content_back-button"
          style={{
            width: "250px",
            height: "5em",
            alignSelf: "flex-end",
          }}
        >
          POR NA SACOLA
        </Button>
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
