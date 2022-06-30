import Banner from "components/Banner";
import ProductList from "components/Main/Product_List";
import Button from "components/Product/Button";
import Sizes from "components/Product/Button_size_list";
import Images from "components/Product/Images";
import { IProducts } from "contracts";
import { useContext, useEffect, useState } from "react";
import { useCartContext } from "contexts/cart.context";
import { ProductContext } from "contexts/product.context";
import {
  ContainerDetails,
  Description,
  DetailsImages,
  Title,
  WrapperDetailsButton,
  WrapperDetailsSizes,
} from "./styles";

interface IDetailsProps {
  product: IProducts;
}

const Details = ({ product }: IDetailsProps) => {
  const { listProduct } = useContext(ProductContext);
  const { addInCart } = useCartContext(product);
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
          {images.slice(1, 5).map((image, index) => {
            return (
              <Images
                key={image.url}
                images={images}
                position={index + 1}
                style={{ width: "18%" }}
                onClick={() => updateStateListImages(index + 1)}
              />
            );
          })}
        </DetailsImages>
        <WrapperDetailsSizes>
          <Sizes id={product.id} listSizes={product.size_available} />
        </WrapperDetailsSizes>
        <WrapperDetailsButton>
          <Button
            unavailable={product.quantity_available <= 0}
            onClick={() => {
              addInCart(product);
            }}
          >
            POR NA SACOLA
          </Button>
        </WrapperDetailsButton>
      </ContainerDetails>
      <Banner />
      <ProductList
        products={listProduct}
        category="ultimos-lancamentos"
        titleBanner="Quem comprou este produto, também levou um desses para casa!"
      />
    </>
  );
};

export default Details;
