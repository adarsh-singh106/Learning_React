import React from 'react'

const ProductItem = ({product,onAdd}) => {
  return (
    <div style={{marginBottom: '10px'}}>
        <span>{product.name} - ₹{product.price}</span>
        <button 
        style={{ marginLeft: '10px' }}
        onClick={() => onAdd(product)}  // ✅ event + passing function
        >
        Add to Cart
      </button>
    </div>
  )
}

export default ProductItem