import { IProducts } from '../../../data'
import Images from '../../Product/Images'
import Sizes from '../../Product/Button_size_list'
import styles from './ProductCart.module.scss'
import ProductFeatures from './Product_features'
import { useRecoilState } from 'recoil'
import { cartListState } from '../../../state/atoms'
import { useEffect, useState } from 'react'

const ProductCart = (product: IProducts): JSX.Element => {
    const [value, setValue] = useState(product.items_cart)
    const [cartList, setCartList] = useRecoilState(cartListState)

    useEffect(() => {
        setValue(product.items_cart)
    }, [product.items_cart])


    return (
        <section className={styles.cart_product}>
            <Images images={product.images} />
            <ProductFeatures title="Produto">
                <p className={styles.description}>{product.name}</p>
            </ProductFeatures>
            <ProductFeatures title="Tamanho escolhido">
                <Sizes id={product.id} listSizes={product.size_avaliable} />
            </ProductFeatures>
            <ProductFeatures title="Valor">
                <p className={styles.value}>R$ {product.price.toFixed(2)}</p>
            </ProductFeatures>
            <ProductFeatures title="Quantidade">
                <input className={styles.quantity} type="number" min={1} max={product.quantity_avaliable} value={value} onChange={(event) => {
                    setValue(Number(event.target.value));
                }} />
            </ProductFeatures>
            <ProductFeatures title="Subtotal">
                <p className={styles.subtotal}>R$ {(product.price * value!).toFixed(2)}</p>
            </ProductFeatures>
        </section>
    )
}

export default ProductCart