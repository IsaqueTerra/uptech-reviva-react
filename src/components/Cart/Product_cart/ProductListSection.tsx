import { useRecoilValue } from "recoil"
import ProductCart from "./index"
import { cartListState, postListState } from "state/atoms"

const ProductListSection = () => {
    const cartList = useRecoilValue(cartListState)

    return (
        <>
            {cartList.map((product) => {
                if (product.items_cart! > 0) {
                    return <ProductCart {...product} key={product.id} />
                }
            })}
        </>
    )
}

export default ProductListSection