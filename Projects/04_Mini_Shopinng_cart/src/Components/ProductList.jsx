import React from 'react'
import ProductItem from './ProductItem';
const ProductList = ({products,onAdd}) => {
  return (
    <>
    <h2>Products 
        {products.map((p,index)=>(
            <ProductItem key={index} product={p} onAdd={onAdd}/>
        ))}</h2></>
  )
}

export default ProductList