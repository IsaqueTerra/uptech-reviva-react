import { ReactNode } from 'react'
import styles from './Caption.module.scss'

const Caption = ({ children }: { children: ReactNode }) => {
    return (
        <h2 className={styles.products_title}><a className={styles.products_link} href="#">{children}</a></h2>
    )
}

export default Caption