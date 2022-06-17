import { Fragment } from "react"
import styles from './Sizes.module.scss'

const Sizes = ({ id, listSizes }: { id: number, listSizes: string[] }) => {
   return (
      <div className={styles.product_size}>
         {listSizes.map((size: string, index) => (
            <Fragment key={listSizes[index]}>
               <input type="radio" id={`size-${size}-` + id} name={`size_model-` + id} className={styles.size_input} />
               <label className={styles.size_label} htmlFor={`size-${size}-` + id}>{size}</label>
            </Fragment>
         ))}
      </div>
   )
}

export default Sizes


