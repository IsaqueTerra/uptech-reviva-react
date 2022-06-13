import Footer from "../../components/Footer"
import Header from "../../components/Header"
import Menu from "../../components/Menu"
import ContainerSearch from "../../components/Search"
import Subtotal from "../../components/Cart/Subtotal"
import "./Cart.module.scss"
import styles from "./Cart.module.scss"
import { Products } from "../../data"
import ProductListSection from "../../components/Cart/Product_cart/ProductListSection"

const products: Products[] = [{
    id: 1,
    name: 'Blusa Plus Size Feminina Ampla Decote Malha Onça Preto Filipa by Reviva Fashion',
    url: 'blusa-plus-onca-preto',
    price: 139.90,
    description: 'Ideal para compor looks com mood básico e estiloso, a Blusa Plus Size Feminina Ampla Decote Redondo Malha Onça Preto Filipa by Riachue é a escolha perfeita para você! Confeccionada em malha mista com linho, a blusa pode ser combinada com calça jogger e tênis casual, criando um look despojado!',
    size_avaliable: ['P', 'M', 'G'],
    quantity_avaliable: 2,
    images: [
        { url: '../../images/product-1/img1.jpg', description: 'Modelo com Blusa Preta, Plus Size, Gola Redonda, Manga 3/4, Pequenas Estampas de Onças na Cor Bege' },
        { url: '../../images/product-1/img2.jpg', description: 'Modelo com Blusa Preta, Plus Size, Gola Redonda, Manga 3/4, Pequenas Estampas de Onças na Cor Bege' },
        { url: '../../images/product-1/img3.jpg', description: 'Modelo de Costas com Blusa Preta, Plus Size, Gola Redonda, Manga 3/4, Pequenas Estampas de Onças na Cor Bege' }
    ]
}]

const Cart = () => {
    return (
        <>
            <Header />
            <Menu />
            <main className={styles.content}>
                <ContainerSearch />
                <section className={styles.content_cart} id="cart">
                    <h1 className={styles.cart_title}>Minha Sacola</h1>
                    <ProductListSection listProduct={products} />
                    <Subtotal />
                </section>
            </main>
            <Footer />
        </>
    )
}

export default Cart