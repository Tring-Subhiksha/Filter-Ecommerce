import React from 'react'
import "../styles/products.css"


const Products = ({result}) => {
  return (
    <div className='card-container'>
      {result}
    </div>
  )
}

export default Products
