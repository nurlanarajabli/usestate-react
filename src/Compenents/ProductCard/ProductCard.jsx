import React from 'react'

const ProductCard = ({item}) => {
  return (
    <div>
        <p>{item.country}</p>
        <p>{item.customerId}</p>
        <p>{item.orderDate}</p>
    </div>
  )
}

export default ProductCard
