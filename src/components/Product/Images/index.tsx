import { IImagemProduto } from "contracts";
import { Params, useParams } from "react-router-dom";
import { ProductImage, ProductLinkImage } from "./styles";
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
