import React, { createContext, useState, useContext, useEffect } from 'react'

const CartContext = createContext()

const CartProvider = (props) => {

    const [cart, setCart] = useState([])
    const [totalValue, setTotalValue] = useState(0)

    useEffect(() => {
        // let value = 0
        // cart.map((product) => {
        //     value = value + product.price
        // })
       // setTotalValue(value)
    }, [cart, totalValue])

    //item que vai ser adc no cart
    function add (product) {
        const newCart = cart
        newCart.push(product)

        setCart([...newCart])
    }

    function remove (productId) {
        let newCart = cart.findIndex((product, i) => product.id === productId)
        console.log(newCart)
        setCart([...newCart])
    }

    //cash das variaves e funçoes
    const store = {
        add,
        cart,
        totalValue,
        remove
    }

    return(
        <CartContext.Provider value={[cart, setCart, totalValue, setTotalValue]}>
            {props.children}
        </CartContext.Provider>
    )
}


export function useCart() {
    const context = useContext(CartContext)

    const {
        cart,
        add,
        totalValue,
        remove,
    } = context

    return {
        cart,
        add,
        totalValue,
        remove
    }
}

export { CartContext, CartProvider }