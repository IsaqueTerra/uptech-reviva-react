import styles from './Price.module.scss'

const Price = ({ price }: { price: number }) =>
(
      <p className={styles.especification_value}>R$ {price.toFixed(2)}</p>
)


export default Price
