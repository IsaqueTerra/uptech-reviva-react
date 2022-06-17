import { ReactNode } from 'react'
import Caption from '../Product/Caption'
import styles from './ContainerProducts.module.scss'

interface IContentProducts {
    children: ReactNode
    title: string
}

const ContentProducts = (props: IContentProducts) => {
    return (
        <section className={styles.content_products}>
            <Caption>{props.title}</Caption>
            {props.children}
        </section>
    )
}

export default ContentProducts