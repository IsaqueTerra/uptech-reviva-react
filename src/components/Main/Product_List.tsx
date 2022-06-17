
import { IProducts } from 'data'
import ContentProducts from '../Container_Products'
import Product from '../Product'

interface IProductList {
   products: IProducts[],
   category: string,
   titleBanner: string
}

const ProductList = ({ products, category, titleBanner }: IProductList) => {
   return (
      <ContentProducts title={titleBanner}>
         {products
            .filter(product => product.category === category)
            .slice(0, 4)
            .map((product: IProducts) => <Product key={product.id} {...product} />)
         }
      </ContentProducts>
   )
}

export default ProductList