import { listProductCart } from "Data/list-products-cart";
import { IProducts } from "contracts";
import { NextApiRequest, NextApiResponse } from "next";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<IProducts[]>
) {
  if (req.method === "POST") {
    const product: IProducts = req.body;

    if (product.quantity_available <= 0) {
      res.status(400).json([]);
    }

    const newProduct = {
      id: product.id,
      name: product.name,
      url: product.url,
      category: product.category,
      price: product.price,
      description: product.description,
      size_available: product.size_available,
      quantity_available: product.quantity_available,
      images: product.images,
      items_cart: product.items_cart + 1,
    };
    updateQuantityInCart(newProduct, res);
  }

  if (req.method === "GET") {
    res.status(200).json(listProductCart);
  }
}

function updateQuantityInCart(
  newProduct: IProducts,
  res: NextApiResponse<IProducts[]>
) {

  const cartItem = listProductCart.find(
    (product) => product.id === newProduct.id
  );

  if (cartItem) {
    if (cartItem.items_cart < newProduct.quantity_available) {
      cartItem.items_cart += 1;
      res.status(200).json(listProductCart);
    }else{
      res.status(401).json(listProductCart);
    }
  } else {
    listProductCart.push(newProduct);
    res.status(200).json(listProductCart);
  }
}
