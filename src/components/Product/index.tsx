import { Products } from '../../data'
import styles from './Product.module.scss'
import Sizes from './Button_size_list'
import Images from './Images'
import Button from './Button'
import Name from './Name'
import Price from './Price'

const Product = ({
    id,
    name,
    url,
    price,
    description,
    size_avaliable,
    quantity_avaliable,
    images
}: Products) =>
(
    <div className={styles.product}>
        <Sizes id={id} listSizes={size_avaliable} />
        <Images images={images} />
        <a href="#" className={styles.products_especification}>
            <Name name={name} />
            <Price price={price} />
        </a>
        <Button>POR NA SACOLA</Button>
    </div>
)


export default Product