import { products, Products } from "../../data"
import Banner from "../Banner"
import ContentProducts from "../Container_Products"
import News from "../News"
import Product from "../Product"
import ContainerSearch from "../Search"
import styles from "./Main.module.scss"

const Main = () => {
    return (
        <main className={styles.content}>
            <ContainerSearch />
            <ContentProducts title="Últimos lançamentos">
                {products.slice(0, 4).map((product: Products) => <Product key={product.id} {...product} />)}
            </ContentProducts>
            <Banner />
            <ContentProducts title="Coleção de Verão 2022">
                {products.slice(4, 8).map((product: Products) => <Product key={product.id} {...product} />)}
            </ContentProducts>
            <News />
        </main>
    )
}

export default Main