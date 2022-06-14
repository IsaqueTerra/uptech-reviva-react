import React from 'react'
import { useRecoilValue } from 'recoil'
import Subtotal from '.'
import { IProducts } from 'data'
import { cartListState } from 'state/atoms'

const ListSubtotal = () => {
    const cartList: IProducts[] = useRecoilValue(cartListState)
    return (
        <>
            {cartList.map((product: IProducts) => (
                <Subtotal key={product.id} product={product} />
            ))}
        </>
    )
}

export default ListSubtotal