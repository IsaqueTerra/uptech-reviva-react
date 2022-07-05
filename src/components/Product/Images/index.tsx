import { IImagemProduto } from "contracts";
import Link from "next/link";
import { ProductImage, ProductLinkImage } from "./styles";
interface IImagesProps {
  id?: number;
  images: IImagemProduto[];
  position?: number;
  style?: React.CSSProperties;
  onClick?: React.MouseEventHandler<HTMLImageElement>;
}

const Images = ({ images, position, style, id, onClick }: IImagesProps) => {

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
      <Link href={`/details/${id}`}>
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
