import { IImagemProduto } from "contracts";
import { Link, Params, useParams } from "react-router-dom";
import styled from "styled-components";
import theme from "styles/global";

const ProductImage = styled.img`
  box-sizing: border-box;
  padding: 0.2em;
  border: 1px solid ${theme.colors.quaternary};
  box-sizing: border-box;
  grid-area: image;
  padding: 0.2em;
  width: 100%;
  &:hover {
    cursor: pointer;
  }
`;

const ProductLinkImage = styled(Link)`
  display: flex;
  height: 100%;
  overflow: hidden;
  width: 100%;
  grid-area: image;

  &:hover ${ProductImage} {
    animation: identifier 9s 0.5s ease infinite;
  }

  @keyframes identifier {
    0% {
      transform: translateX(0%);
    }

    25% {
      transform: translateX(-100%);
    }

    50% {
      transform: translateX(-200%);
    }

    75% {
      transform: translateX(-100%);
    }

    100% {
      transform: translateX(0%);
    }
  }
`;


interface IImagesProps {
  id?: number;
  images: IImagemProduto[];
  position?: number;
  style?: React.CSSProperties;
  onClick?: React.MouseEventHandler<HTMLImageElement>;
}

const Images = ({ images, position, style, id, onClick }: IImagesProps) => {
  const parameter = useParams();

  const generateUrlIfInside = (params: Readonly<Params<string>>) => {
    return params.id ? `${id}` : `details/${id}`;
  };

  const route = generateUrlIfInside(parameter);

  if (position! >= 0) {
    return (
      <ProductImage
        style={style}
        key={images[position!].url}
        src={process.env.PUBLIC_URL + images[position!].url}
        alt={images[position!].description}
        onClick={onClick}
      />
    );
  } else {
    return (
      <ProductLinkImage to={route}>
        {images.map((image) => (
          <ProductImage
            style={style}
            key={image.url}
            src={process.env.PUBLIC_URL + image.url}
            alt={image.description}
          />
        ))}
      </ProductLinkImage>
    );
  }
};

export default Images;
