import styles from './Button.module.scss'
import { useState } from 'react'

const ButtonMobile = () => {
   // const [classer, setClasser] = useState(styles["menu-navegation_items"])
   // setClasser(styles["menu-navegation_items--active"])

   return (
      <button className={styles["menu-navegation_button"]}>Menu</button>
   )
}
export default ButtonMobile