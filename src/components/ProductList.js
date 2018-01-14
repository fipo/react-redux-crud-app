import React from 'react'
import Product from './Product'

import { hasReadPermission } from '../utils/hasPermission'

const ProductList = ({ products, permissions }) => (
  <div>
    {hasReadPermission(permissions)
      ? products.map(product => {
          return <Product key={product.id} {...product} />
        })
      : "You don't have the READ permission"}
  </div>
)

export default ProductList
