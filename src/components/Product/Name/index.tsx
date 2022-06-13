import styles from './Name.module.scss'

const Name = ({ name }: { name: string }) =>
(
      <h4 className={styles.especification_name}>{name}</h4>
)


export default Name


