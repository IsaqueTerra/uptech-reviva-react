import { IProducts } from 'data'
import Images from '../../Product/Images'
import Sizes from '../../Product/Button_size_list'
import styles from './ProductCart.module.scss'
import ProductFeatures from './Product_features'
import { useRecoilState } from 'recoil'
import { cartListState, inventoryState } from 'state/atoms'
import { useEffect, useState } from 'react'

const ProductCart = (product: IProducts) => {
    const [value, setValue] = useState(product.items_cart)
    const [cartList, setCartList] = useRecoilState(cartListState)
    const [inventaryList, setInventaryList] = useRecoilState(inventoryState)
    const newCartList: IProducts[] = JSON.parse(JSON.stringify(cartList))
    const newInventaryList: IProducts[] = JSON.parse(JSON.stringify(inventaryList))

    const updateQuantityCart = (value: number) => {
        const indexItem = newCartList.findIndex((item: IProducts) => item.id === product.id);
        newCartList[indexItem].items_cart = value
        return newCartList
    }

    const setUpdateQtyCart = (value: number) => {
        setCartList(() => updateQuantityCart(value))
    }

    const updateInInventary = (value: number) => {
        const indexItem = newInventaryList.findIndex((item: IProducts) => item.id === product.id);
        const updatedValue = product.quantity_avaliable - value
        newInventaryList[indexItem].quantity_avaliable = updatedValue
        return newInventaryList
    }
    
    const setUpdateInInventary = (value: number) => {
        setInventaryList(() => updateInInventary(value))
    }
    
    useEffect(() => {
        setValue(product.items_cart)
    }, [cartList])

    return (
        <section className={styles.cart_product}>
            <Images images={product.images} />
            <ProductFeatures title="Produto">
                <p className={styles.description}>{product.name}</p>
            </ProductFeatures>
            <ProductFeatures title="Tamanho escolhido">
                <Sizes
                    id={product.id}
                    listSizes={product.size_avaliable} />
            </ProductFeatures>
            <ProductFeatures title="Valor">
                <p className={styles.value}>R$ {product.price.toFixed(2)}</p>
            </ProductFeatures>
            <ProductFeatures title="Quantidade">
                <input id={(3).toString()} className={styles.quantity}
                    type="number"
                    min={1}
                    max={product.quantity_avaliable}
                    value={product.items_cart} onChange={(event) => {

                        if (Number(event.target.value) > product.quantity_avaliable) {
                            event.target.value = product.quantity_avaliable.toString()
                        }else if (Number(event.target.value) == 0) {
                            event.target.value = "1"
                        }
                        setUpdateInInventary(Number(event.target.value));
                        setUpdateQtyCart(Number(event.target.value));
                    }} />
            </ProductFeatures>
            <ProductFeatures title="Subtotal">
                <p className={styles.subtotal}>R$ {(product.price * value!).toFixed(2)}</p>
            </ProductFeatures>
        </section>
    )
}

export default ProductCart