import Logo from "../Logo"
import ContactList from "./Contact_List"
import MenuFooter from "./Menu"
import SignUp from "./SignUp"
import SocialNetwork from "./Social_Network"
import styles from "./Footer.module.scss"

const Footer = () => {
    return (
        <footer className={styles["base-footer"]}>
            <section className={styles.footer}>
                <a href="index.html" className={styles.footer_logo}>
                    <Logo />
                </a>
                <MenuFooter />
                <SocialNetwork />
                <ContactList />
                <SignUp />
            </section>
        </footer>
    )
}

export default Footer