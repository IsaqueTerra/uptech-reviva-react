import React from 'react'
import { Products } from '../../../data'
import Images from '../../Product/Images'
import Sizes from '../../Product/Button_size_list'
import styles from './ProductCart.module.scss'
import ProductFeatures from './Product_features'

const ProductCart = (product: Products) : JSX.Element => {
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
                <input className={styles.quantity} type="number" min="1" />
            </ProductFeatures>
            <ProductFeatures title="Subtotal">
                <p className={styles.subtotal}>R$ {product.price.toFixed(2)}</p>
            </ProductFeatures>
        </section>
    )
}

export default ProductCart