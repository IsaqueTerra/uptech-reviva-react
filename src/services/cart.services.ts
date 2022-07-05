import { IProducts } from "contracts";
import { Dispatch, SetStateAction } from "react";

export const addInCart = async (
  product: IProducts,
  setCartList: Dispatch<SetStateAction<IProducts[]>>,
  setStatus: Dispatch<SetStateAction<boolean>>
) => {
  let status;
  await fetch("http://localhost:3000/api/cart", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ ...product }),
  })
    .then((response) => {
      if (response.status === 401) {
        setStatus(true)
      }
      return response.json();
    })
    .then((data) => {
      setCartList([...data]);
    })
  return status;
};