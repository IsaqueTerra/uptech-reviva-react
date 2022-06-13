
import styles from './SocialNetworks.module.scss' 

const SocialNetwork = () => {
    return (
        <nav className={styles["footer_network-social"]}>
            <p className={styles["network-social_title"]}>Siga-nos nas redes sociais</p>
            <ul className={styles["network-social_list-icons"]}>
                <li><a href="#"><img className={styles["list-icons_icon"]} src="icons/logo-facebook.svg"
                    alt="facebook" /></a></li>
                <li><a href="#"><img className={styles["list-icons_icon"]} src="icons/logo-twitter.svg" alt="twitter" /></a>
                </li>
                <li><a href="#"><img className={styles["list-icons_icon"]} src="icons/logo-instagram.svg"
                    alt="instagram" /></a></li>
                <li><a href="#"><img className={styles["list-icons_icon"]} src="icons/logo-youtube.svg" alt="youtube" /></a>
                </li>
            </ul>
        </nav>
    )
}

export default SocialNetwork