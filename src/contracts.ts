export interface IProducts {
    id: number;
    name: string,
    url: string,
    category: string,
    price: number,
    description: string,
    size_available: string[],
    quantity_available: number,
    images: IImagemProduto[];
    items_cart: number
}

export interface IImagemProduto {
    url: string,
    description: string
}

export interface IInventoryState{
    id: number;
    quantity_available: number;
}

export interface ICartListState{
    id: number;
    quantity_cart: number;
}

