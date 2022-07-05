import { IProducts } from 'contracts'
import productList from 'Data/data'
import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<IProducts[]>
) {
  res.status(200).json(productList)
}
