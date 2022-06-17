import Logo from "../Logo"
import ContactList from "./Contact_List"
import MenuFooter from "./Menu"
import SignUp from "./SignUpNewsletter"
import SocialNetwork from "./Social_Network"
import styles from "./Footer.module.scss"

const Footer = () => {
    return (
        <footer className={styles["base-footer"]}>
            <section className={styles.footer}>
                <Logo />
                <MenuFooter />
                <SocialNetwork />
                <ContactList />
                <SignUp />
            </section>
        </footer>
    )
}

export default Footer