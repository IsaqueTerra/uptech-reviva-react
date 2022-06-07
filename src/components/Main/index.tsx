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
                {products.map((product: Products) => <Product key={product.id} {...product} />).slice(0, 4)}
            </ContentProducts>
            <Banner />
            <ContentProducts title="Coleção de Verão 2022">
                {products.map((product: Products) => <Product key={product.id} {...product} />).slice(4, 8)}
            </ContentProducts>
            <News />
        </main>
    )
}

export default Main