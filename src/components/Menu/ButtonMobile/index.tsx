import styles from './Button.module.scss'
import { useState } from 'react'

interface IButtonMobile {
   onClick: React.MouseEventHandler
}

const ButtonMobile = ({ onClick }: IButtonMobile) => {
   return (
      <button onClick={onClick} className={styles["menu-navegation_button"]}>Menu</button>
   )
}
export default ButtonMobile