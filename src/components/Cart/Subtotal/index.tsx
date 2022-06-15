import { useRecoilValue } from 'recoil';
import { IProducts } from 'data';
import { cartListState } from 'state/atoms';
import styles from './Subtotal.module.scss'

interface ISubtotal {
    product: IProducts,
}

const Subtotal = ({ product }: ISubtotal) => {
    const cartList: IProducts[] = useRecoilValue(cartListState)

    const calculatesSubtotal = (list: IProducts[]) => {
        return list.reduce((acc, product) => {
            return acc += product.price * product.items_cart!
        }, 0).toFixed(2)
    }

    return (
        <div className={styles.cart_checkout}>
            <p className={styles.checkout_total}>Total R$ {calculatesSubtotal(cartList)}</p>
            {cartList.map((product: IProducts) => {
                if (product.items_cart! > 0) {
                    return <p
                        key={product.id}
                        className={styles.checkout_value}
                    >
                        {product.items_cart} x {product.price} =
                        {(product.items_cart! * product.price).toFixed(2)}
                    </p>
                }
            })}
            <a href="#" className={styles.checkout_button}>Ir para pagamento</a>
        </div>
    )
}

export default Subtotal;