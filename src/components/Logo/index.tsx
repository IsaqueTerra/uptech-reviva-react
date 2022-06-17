import { Link } from 'react-router-dom'
import styles from './Logo.module.scss'

const Logo = () =>
(
   <Link to="/" className={styles.container_logo}>
         <h1 className={styles.logo_top}>Reviva Fashion</h1>
         <span className={styles.logo_bottom}>by RCHLO</span>
   </Link>
)

export default Logo