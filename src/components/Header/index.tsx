import Cart from "./Cart"
import Logo from "../Logo"
import styles from "./Header.module.scss"

const Header = () => {
    return (
        <header className={styles.header}>
            <Logo />
            <Cart />
        </header>
    )
}

export default Header