import { useRef, useState } from 'react'
import './index.css'
import Products from './Products'
import { CartItems } from '../App'

interface CartProps {
}
function Cart(props: CartProps) {
  const [isShowProducts, setIsShowProducts] = useState(false)
  const cartBtn = useRef<HTMLButtonElement>(null)
  if(cartBtn.current) {
    cartBtn.current.addEventListener('mouseover', ()=> {
      setIsShowProducts(true)
    })
  }
  setTimeout(()=> {
    const productsDom = document.getElementById('products')
    if(productsDom) {
      productsDom.addEventListener('mouseover', ()=> {
        setIsShowProducts(true)
      })
      productsDom.addEventListener('mouseleave', ()=> {
        setIsShowProducts(false)
      })
    }
  }, 0)
  
  return (
    <div className="cart">
      <button ref={cartBtn}>购物车</button>
      { isShowProducts && (<Products/>) }
    </div>  
  )
}

export default Cart
