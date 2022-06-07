import styles from './MenuFooter.module.scss'

const MenuFooter = () =>
(
    <ul className={styles["footer_menu-navegation"]}>
        <li className={styles["menu-navegation_title"]}>Menu</li>
        <li className={styles["menu-navegation_item"]}><a className={styles["menu-navegation_link"]} href="#">Página Inicial</a></li>
        <li className={styles["menu-navegation_item"]}><a className={styles["menu-navegation_link"]} href="#">Moda Masculina</a></li>
        <li className={styles["menu-navegation_item"]}><a className={styles["menu-navegation_link"]} href="#">Moda Feminina</a></li>
        <li className={styles["menu-navegation_item"]}><a className={styles["menu-navegation_link"]} href="#">Moda Infantíl</a></li>
        <li className={styles["menu-navegation_item"]}><a className={styles["menu-navegation_link"]} href="#">Manual de Moda</a></li>
    </ul>
)

export default MenuFooter