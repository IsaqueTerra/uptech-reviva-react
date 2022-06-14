
import { useRecoilState } from 'recoil'
import { routes } from 'state/atoms'
import styles from './Cart.module.scss'

const Cart = () => {
   const [exhibition, setexhibition] = useRecoilState(routes)
   const stateExhibition = !exhibition
   return (
      <a
         href="cart.html"
         className={styles.header_cart}
         aria-label="carrinho de compra"
         onClick={(event) => {
            event.preventDefault()
            setexhibition(stateExhibition)
         }}
         >   
      </a>
   )
}
export default Cart