import styles from './Logo.module.scss'

const Logo = () =>
(
   <div className={styles.header_logo}>
      <h1 className={styles.logo_top}>Reviva Fashion</h1>
      <span className={styles.logo_bottom}>by RCHLO</span>
   </div>
)

export default Logo