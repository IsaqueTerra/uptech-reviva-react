
import { Link } from 'react-router-dom'
import { useRecoilState } from 'recoil'
import { routes } from 'state/atoms'
import styles from './Cart.module.scss'

const Cart = () => {
   return (
      <Link
         to="/cart"
         className={styles.header_cart}
         aria-label="carrinho de compra"
      />
   
   )
}
export default Cart