import { useRecoilValue } from "recoil"
import ProductCart from "./index"
import { IProducts } from "../../../data"
import { cartListState, postListState } from "../../../state/atoms"

const ProductListSection = () => {
    const cartList = useRecoilValue(cartListState)
    const postList = useRecoilValue(postListState)

    const idItemsCard = cartList.map(itemCart => itemCart.id)

    return (
        <div>
            {cartList.map((product) => <ProductCart {...product} key={product.id} />)}
        </div>
    )
}

export default ProductListSection