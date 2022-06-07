import styles from './Button.module.scss'
import React, { Children } from 'react'
import { JsxChild, JsxElement } from 'typescript'

const Button = ({ children }: { children: React.ReactNode }) =>
(
    <div className={styles["product_button-bag"]}>
        <div className={styles["button-bag_content"]}>
            <div className={styles["content_front-button"]}>
                <button className={styles["button-bag"]}>{children}</button>
            </div>
            <button className={styles["content_back-button"]}></button>
        </div>
    </div>
)


export default Button
