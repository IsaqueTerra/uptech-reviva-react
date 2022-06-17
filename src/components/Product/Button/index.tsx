import styles from './Button.module.scss'
import React, { Children } from 'react'

interface IButton {
    children: React.ReactNode,
    classItem: string
    onClick?: () => void,
}

const Button = ({ children, classItem ,onClick }: IButton) =>
(
    <div className={styles["product_button-bag"]} onClick={onClick}>
        <div className={styles["button-bag_content"]}>
            <div className={styles["content_front-button"]}>
                <button className={styles["button-bag"]}>{children}</button>
            </div>
            <button className={styles[classItem]}></button>
        </div>
    </div>
)


export default Button 
