import styles from './Input_Search.module.scss'

const Search = ({ placeholder }: { placeholder: string }) =>
(
   <input className={styles.search_field} placeholder={placeholder} type="text" />
)


export default Search