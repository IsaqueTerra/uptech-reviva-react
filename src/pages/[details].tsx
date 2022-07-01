import React, { useContext } from 'react'
import { useRouter } from 'next/router'
import Details from 'components/Details';
import { ProductContext } from 'contexts/product.context';

const PageDetails = () => {
  const router = useRouter()
  const { details } = router.query;

  const { listProduct } = useContext(ProductContext);
  const product = listProduct.find((item) => item.id === Number(details));
  if (!product) {
    return "";
  }
  return <Details product={product} />;
};

export default PageDetails;