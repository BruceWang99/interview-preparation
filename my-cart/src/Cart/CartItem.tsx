import './CartItem.scss'
import { CartItem as CartItemType } from '../App'
import { useContext } from 'react'
import { CartContext } from '../cartContext';

interface CartItemProps {
	item: CartItemType
}
function CartItem({item}: CartItemProps) {
	const context = useContext(CartContext);
	// 删除购物车中的商品
	function onDelete (product: CartItemType) {
		let items = context ? [...context.state.products] : []
		const selectedItem = items.find(item=> item.id === product.id)
		if(selectedItem) {
			selectedItem.count--
			if(selectedItem.count <= 0) {
				items = items.filter(item => item.id !== product.id)
			}
		}
		if(context) {
		context.dispatch({
			type: 'update',
			payload: items
		})
		}
	}
  return (
    <div className="cart-item">
	   <span className='cart-item__left'>
	   {item.name}
	   </span>
	   <div className='cart-item__right'>
		<span className='cart-item__right-price'>{item.price}</span>*
		<span className='cart-item__right-count'>{item.count}</span>
		<button onClick={()=>onDelete(item)}>删除</button>
	   </div>
    </div>  
  )
}

export default CartItem
