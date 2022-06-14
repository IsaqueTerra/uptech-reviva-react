import { useRecoilValue } from "recoil"
import { postListState } from "state/atoms"
import Banner from "../Banner"
import News from "../News"
import styles from "./Main.module.scss"
import ProductList from "./Product_List"

const Main = () => {
    const products = useRecoilValue(postListState)
    return (
        <main className={styles.content}>
            <ProductList 
                products={products} 
                category="ultimos-lancamentos" 
                titleBanner="Últimos lançamentos" />
            <Banner />
            <ProductList 
                products={products} 
                category="colecao-verao" 
                titleBanner="Últimos lançamentos" />
            <News />
        </main>
    )
}

export default Main