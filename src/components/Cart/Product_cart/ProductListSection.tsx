import ProductCart from "."
import { Products, products } from "../../../data"

interface IProductListSection {
    listProduct: Products[]
}

const ProductListSection = ({ listProduct }: IProductListSection) => {
    return (
        <div>
            {listProduct.map((product) => <ProductCart {...product} key={product.id} />)}
        </div>
    )
}

export default ProductListSection