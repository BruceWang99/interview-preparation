import { useState } from 'react'
import './index.scss'
import { Product } from '../App'

interface ProductItemProps {
  item: Product,
  addToCart: (p: Product) => void
}
function ProductItem(props: ProductItemProps) {
  const { item, addToCart } = props
  return (
    <div className="product-item">
      <img className="product-item__img" src={item.image}/>
      <div className="product-item__bottom">
        <span className="product-item__bottom-left">{item.name}</span>
        <div className="product-item__bottom-right">
          <span>{item.price}</span>
          <button onClick={()=> addToCart(item)}>加入购物车</button>
        </div>
      </div>
    </div>  
  )
}

export default ProductItem
