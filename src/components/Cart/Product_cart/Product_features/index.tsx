import React, { Children } from 'react'
import styles from './ProductFeatures.module.scss'

interface IProductFeatures {
    title: string,
    children: React.ReactNode
}

const ProductFeatures = ({ title, children }: IProductFeatures) => {
    return (
        <div className={styles.product_features}>
            <h2 className={styles.features_title}>{title}</h2>
            {children}
        </div>
    )
}

export default ProductFeatures