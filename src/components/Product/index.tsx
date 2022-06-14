import { IProducts } from '../../data'
import styles from './Product.module.scss'
import Sizes from './Button_size_list'
import Images from './Images'
import Button from './Button'
import Name from './Name'
import Price from './Price'
import { useRecoilState} from 'recoil'
import { cartListState, inventoryState } from '../../state/atoms'


export const findItemById = (list: IProducts[], id: number) => list.some(item => item.id === id)

const Product = (product: IProducts) => {

    const [cartList, setCartList] = useRecoilState(cartListState)
    const [inventoryList, setInventoryList] = useRecoilState(inventoryState)
    const newProduct = JSON.parse(JSON.stringify(product))
    const newCartList = JSON.parse(JSON.stringify(cartList))
    const newInventoryList = JSON.parse(JSON.stringify(inventoryList))


    const incrementInCart = (list: IProducts[], id: number) => {
        return list.map((product: IProducts) => {
            if (product.id === id && product.quantity_avaliable > product.items_cart!) product.items_cart!++;
            return product
        })
    }
    
    const addProductToCart = () => {
        if (findItemById(cartList, newProduct.id)) {
            setCartList(() => incrementInCart(newCartList, product.id))
        } else {
            newProduct.items_cart = 1
            setCartList([...cartList, newProduct])
        }
    }
    
    const itemsIsAvailable = (list: IProducts[], id: number) => list
    .reduce((acc, item) => item.quantity_avaliable > 0 && item.id === id ? true : acc, false)

    const condition = itemsIsAvailable(inventoryList, product.id);

    const decrementInInventary = (list: IProducts[], id: number) => {
        return list.map((product: IProducts) => {
            if (product.id === id) product.quantity_avaliable--;
            return product
        })
    }
    
    const decreaseProductToInventary = () => {
        if (condition) {
            setInventoryList(() => decrementInInventary(newInventoryList, product.id))
        }
    }
    
    const classButton = condition ? 'content_back-button' : 'content_back-button--unavailable';

    return (
        <div className={styles.product}>
            <Sizes id={product.id} listSizes={product.size_avaliable} />
            <Images images={product.images} />
            <a href="#" className={styles.products_especification}>
                <Name name={product.name} />
                <Price price={product.price} />
            </a>
            <Button classItem={classButton} onClick={() => {
                addProductToCart();
                decreaseProductToInventary();
            }} >POR NA SACOLA</Button>
        </div>
    )
}

export default Product








































