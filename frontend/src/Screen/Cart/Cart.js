import { Link } from 'react-router-dom';
import React, { useContext, useEffect } from 'react'
import { CartContext } from '../../context/Cart'

import CartItem from "./CartItem";
import './index.css'

const Cart = () => {


    const [cart, setCart, totalValue, setTotalValue] = useContext(CartContext)
   console.log(totalValue)
   const newTotalValue = cart.reduce((acc, product) => acc + product.price, 0)
   
   useEffect(() => {
    setTotalValue(newTotalValue)

    }, [totalValue])

    function clearCart(){
        setCart([])
    }
 
    
    if (cart.length === 0) {
        return (
            <section className="cart3">
              {/* cart header */}
              <header>
                <>
                    <Link to='/'>
                        <h1>Home</h1>
                    </Link>
                    <h2>Your Cart</h2>
                </>
                <h4 className="empty-cart" style={{fontSize: 30}}>is currently empty</h4>
              </header>
            </section>
        );
    }

    return (
        <section className="cart3">
            <header>
                <>
                <Link to='/'>
                    <h1>Home</h1>
                </Link>
                    <h2>Your Cart</h2>
                </>
            </header>
            <article>
                {cart.map(product => {
                    return <CartItem key={product.id} {...product} />;
                })}
            </article>
            <footer>
                <hr />
                <div className="cart-total">
                    <h4>
                        <p style={{fontSize: 50}}>total</p><span style={{fontSize: 50}}>R$: {totalValue}</span>
                    </h4>
                </div>
                <button className="btn clear-btn"style={{fontSize: 20}} onClick={() => clearCart()} >Clear Cart</button>
                <Link to="/Checkout" >
                    <button className="btn clear-btn" style={{fontSize: 20}}>Chekout</button>
                </Link>
            </footer>
        </section>
    )
}

export default Cart
