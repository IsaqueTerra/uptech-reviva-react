import styles from './Subtotal.module.scss'

const Subtotal = () => {
    return (
        <div className={styles.cart_checkout}>
            <p className={styles.checkout_total}>Total R$ 159,70</p>
            <p className={styles.checkout_value}>1x39,90 = 39,90</p>
            <p className={styles.checkout_value}>2x59,90 = 119,80</p>
            <a href="#" className={styles.checkout_button}>Ir para pagamento</a>
        </div>
    )
}

export default  Subtotal;