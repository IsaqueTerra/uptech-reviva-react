import React from 'react'
import ContainerSearch from '../Search'
import styles from './Cart.module.scss'
import ProductListSection from './Product_cart/ProductListSection'
import ListSubtotal from './Subtotal/ListSubtotal'

const CartMain = () => {
    return (
        <main className={styles.content}>
            <ContainerSearch />
            <section className={styles.content_cart} id="cart">
                <h1 className={styles.cart_title}>Minha Sacola</h1>
                <ProductListSection />
                <ListSubtotal />
            </section>
        </main>
    )
}

export default CartMain