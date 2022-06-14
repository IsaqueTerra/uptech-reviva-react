import Footer from "../../components/Footer"
import Header from "../../components/Header"
import Menu from "../../components/Menu"
import ContainerSearch from "../../components/Search"
import Subtotal from "../../components/Cart/Subtotal"
import "./Cart.module.scss"
import styles from "./Cart.module.scss"
import { IProducts } from "../../data"
import ProductListSection from "../../components/Cart/Product_cart/ProductListSection"
import { useRecoilValue } from "recoil"
import { cartListState } from "../../state/atoms"

const Cart = () => {
    const [cartList] = useRecoilValue(cartListState)
   
    return (
        <>
            <Header />
            <Menu />
            <main className={styles.content}>
                <ContainerSearch />
                <section className={styles.content_cart} id="cart">
                    <h1 className={styles.cart_title}>Minha Sacola</h1>
                    <ProductListSection />
                    {cartList && <Subtotal />}
                </section>
            </main>
            <Footer />
        </>
    )
}

export default Cart