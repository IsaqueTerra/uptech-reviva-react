import styles from './Banner.module.scss'
import Logo from "../Logo"

const Banner = () => 
     (
        <a href="#" title="Ir para menu da moda" className={styles.content_banner}>
            <p className={styles.banner_text}>Fique por dentro de tudo que há de novidade no mundo da moda!<br />Baixe já nosso
                manual de moda!</p>
            <div className={styles.banner_logo}>
                <Logo />
            </div>
        </a>
    )

export default Banner