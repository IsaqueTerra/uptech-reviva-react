import Search from "./Input_Search"
import ButtonSearch from "./Button_Search"
import styles from "./Search.module.scss"

const ContainerSearch = () => {
    return (
        <section className={styles.content_search}>
            <Search placeholder="Faça sua busca aqui se já souber o que está procurando..." />
            <ButtonSearch />
        </section>
    )
}

export default ContainerSearch