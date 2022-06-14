import { useRecoilValue } from "recoil"
import ProductCart from "./index"
import { cartListState, postListState } from "state/atoms"

const ProductListSection = () => {
    const cartList = useRecoilValue(cartListState)

    return (
        <div>
            {cartList.map((product) => <ProductCart {...product} key={product.id} />)}
        </div>
    )
}

export default ProductListSection