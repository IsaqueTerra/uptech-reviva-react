import { ReactNode } from 'react'
import Caption from '../Product/Caption'
import styles from './ContainerProducts.module.scss'

const ContentProducts = ({ children, title }: { children: ReactNode, title: string }) => {
    return (
        <section className={styles.content_products}>
            <Caption>{title}</Caption>
            {children}
        </section>
    )
}

export default ContentProducts