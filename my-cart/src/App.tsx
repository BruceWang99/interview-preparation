import { useState, useContext } from 'react'
import ProductItem from './ProductItem'
import Cart from './Cart'
import { CartContext } from './cartContext'
import './App.scss'
export interface Product {
  id: number
  name: string
  image: string
  price: number
}
export interface CartItem extends Product {
  count: number
}
export type CartItems = CartItem[]
type Products = Product[]
function App() {
  const context = useContext(CartContext);
  const [products] = useState<Products>(()=> {
    console.log('useState');
    return getProducts()
  })
  const ProductItems = products.map((product)=> {
    return (
      <ProductItem item={ product } addToCart={addToCart} key={product.id}/>
    )
  })
  // 添加到购物车
  function addToCart(product: Product) {
    let items = context ? [...context.state.products] : []
    const selectedItem = items.find(item=> item.id === product.id)
    if(selectedItem) {
      selectedItem.count++
    } else {
      items.push({
        ...product,
        count: 1
      })
    }
    if(context) {
      context.dispatch({
        type: 'update',
        payload: items
      })
    }
  }
  console.log('hello before render....')
  return (
    <div className="home">
      <header className='home__nav'>
        <h3>购物天堂</h3>
        {/* 购物车组件 */}
          <Cart/>
      </header>
      <div className='home__list'>
        {/* 商品列表 */}
        { ProductItems }
      </div>  
    </div>  
  )
}

function getProducts ():Products {
  return [
    {
      id: 1,
      name: '苹果苹果苹果苹果苹果苹果苹果苹果',
      image: 'https://fresh-picture.oss-cn-hangzhou.aliyuncs.com/freshandroid_1647402610000.jpeg',
      price: 29.00
    },
    {
      id: 2,
      name: '荔枝',
      image: 'https://fresh-picture.oss-cn-hangzhou.aliyuncs.com/freshandroid_1647402610000.jpeg',
      price: 80.00
    },
    {
      id: 3,
      name: '香蕉',
      image: 'https://fresh-picture.oss-cn-hangzhou.aliyuncs.com/freshandroid_1647402610000.jpeg',
      price: 27.00
    },
    {
      id: 4,
      name: '火龙果',
      image: 'https://fresh-picture.oss-cn-hangzhou.aliyuncs.com/freshandroid_1647402610000.jpeg',
      price: 60.00
    },
    {
      id: 5,
      name: '椰子',
      image: 'https://fresh-picture.oss-cn-hangzhou.aliyuncs.com/freshandroid_1647402610000.jpeg',
      price: 80.00
    },
    {
      id: 6,
      name: '榴莲',
      image: 'https://fresh-picture.oss-cn-hangzhou.aliyuncs.com/freshandroid_1647402610000.jpeg',
      price: 20.00
    },
    {
      id: 7,
      name: '椰子',
      image: 'https://fresh-picture.oss-cn-hangzhou.aliyuncs.com/freshandroid_1647402610000.jpeg',
      price: 10.00
    },
    {
      id: 8,
      name: '苹果',
      image: 'https://fresh-picture.oss-cn-hangzhou.aliyuncs.com/freshandroid_1647402610000.jpeg',
      price: 26.00
    },
    {
      id: 9,
      name: '香蕉',
      image: 'https://fresh-picture.oss-cn-hangzhou.aliyuncs.com/freshandroid_1647402610000.jpeg',
      price: 4.00
    },
    {
      id: 10,
      name: '红葡萄',
      image: 'https://fresh-picture.oss-cn-hangzhou.aliyuncs.com/freshandroid_1647402610000.jpeg',
      price: 20.00
    },
    {
      id: 11,
      name: '苹果',
      image: 'https://fresh-picture.oss-cn-hangzhou.aliyuncs.com/freshandroid_1647402610000.jpeg',
      price: 20.00
    }
  ]
}
export default App
