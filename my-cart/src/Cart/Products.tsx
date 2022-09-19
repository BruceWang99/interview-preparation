import './Products.scss'

import CartItem from './CartItem'
import { useContext } from 'react'
import { CartContext } from '../cartContext'


interface ProductsProps {

}
function Products(props: ProductsProps) {
  const context = useContext(CartContext)
  const items = context ? context.state.products : []
  const CartItems = items.map(item=> {
	return (<CartItem item={item} key={item.id}/>)
  })
  function onPurchase() {
    const count = items.reduce((pre, curr, index) => {
      return pre + curr.price * curr.count
    }, 0)
    alert((count * 100) / 100)
  }
  return (
    <div className="products" id="products">
	   <div className='products__list'>
	   	{CartItems}
	   </div>
      <button className="products__btn" onClick={onPurchase}>购买</button>
    </div>  
  )
}

export default Products
function countContext(countContext: any) {
	throw new Error('Function not implemented.')
}
