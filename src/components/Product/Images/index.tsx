import { IImagemProduto } from "contracts";
import Link from "next/link";
import { useRouter } from "next/router";
import { ParsedUrlQuery } from "querystring";
// import { Params, useParams } from "react-router-dom";
import { ProductImage, ProductLinkImage } from "./styles";
interface IImagesProps {
  id?: number;
  images: IImagemProduto[];
  position?: number;
  style?: React.CSSProperties;
  onClick?: React.MouseEventHandler<HTMLImageElement>;
}

const Images = ({ images, position, style, id, onClick }: IImagesProps) => {
  const router = useRouter();
  const generateUrlIfInside = (params: ParsedUrlQuery) => {
    return params.id ? `${id}` : `details/${id}`;
  };

  generateUrlIfInside(router.query);

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
      <Link href={`/${id}`}>
        <ProductLinkImage>
          {images.map((image) => (
            <ProductImage
              style={style}
              key={image.url}
              src={process.env.PUBLIC_URL + image.url}
              alt={image.description}
            />
          ))}
        </ProductLinkImage>
      </Link>
    );
  }
};

export default Images;
