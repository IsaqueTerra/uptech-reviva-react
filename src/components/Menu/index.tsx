import ButtonMobile from './ButtonMobile'
import styles from './Menu.module.scss'

const Menu = () =>
(
   <nav className={styles["menu-navegation"]}>
      <ul className={styles["menu-navegation_items"]}>
         <li className={styles["item_menu-navegation"]}><a className={styles.item_link} href="#">Página Inicial</a></li>
         <li className={styles["item_menu-navegation"]}><a className={styles.item_link} href="#">Moda Masculina</a></li>
         <li className={styles["item_menu-navegation"]}><a className={styles.item_link} href="#">Moda Feminina</a></li>
         <li className={styles["item_menu-navegation"]}><a className={styles.item_link} href="#">Moda Infantíl</a></li>
         <li className={styles["item_menu-navegation"]}><a className={styles.item_link} href="#">Manual de Moda</a></li>
      </ul>
      {/* <ButtonMobile /> */}
   </nav>
)

export default Menu