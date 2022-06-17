import { IImagemProduto } from "data"
import styles from './Images.module.scss'

const Images = ({ images }: { images: IImagemProduto[] }) => {
    return (<a className={styles["product_link-image"]} href="details.html" >
        {images.map((image) => < img
            key={image.url}
            className={styles.product_image}
            src={process.env.PUBLIC_URL + image.url}
            alt={image.description}
        />)}
    </a >)

}

export default Images
