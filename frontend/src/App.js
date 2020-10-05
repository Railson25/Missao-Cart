import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Cart from './Screen/Cart/Cart'
import Product from './Screen/Product/Product'
import ProductInfo from './Screen/Product/ProductInfo'
import Checkout from './Screen/Chekout/Chekout'
import {CartProvider} from './context/Cart'
import CartItem from './Screen/Cart/CartItem'


export default function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Route exact path='/' component={Product} />
        <Route path='/Cart' component={Cart} />
        <Route path='/ProductInfo/:id' component={ProductInfo} />
        <Route path='/Checkout' component={Checkout} />
        <Route path='/CartItem' component={CartItem} />
      </BrowserRouter>
    </CartProvider>
  )
}

// function iconWithBadge () {
//   return(
//     <div>
//       <span>1</span>
//     </div>
//   )
// }
  