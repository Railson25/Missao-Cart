 
import React, { useContext, useState } from "react";
import { CartContext} from "../../context/Cart";

const CartItem = ({ picture, title, price, quantity, id }) => {
    const [cart, setCart, totalValue, setTotalValue] = useContext(CartContext)
    const [ amount, setAmount] = useState(1)

    console.log(totalValue)
    function incrementAmount() {
      const newAmount = amount + 1
      if(newAmount <=quantity) {
        setAmount(newAmount)

         const newTotalValue = totalValue + price
         setTotalValue(newTotalValue)
      }

    }

    function decrementAmount() {
      const newAmount2 = amount - 1
      if(newAmount2 <= quantity ) {
        if(newAmount2 >= 1) {
          setAmount(newAmount2)
          
          // const newTotalValue2 = (totalValue + price) - price
          // setTotalValue(newTotalValue2)
          // console.log(newTotalValue2)
        }
        setTotalValue()
      }
    }

    function removeItem (productId) {
      const productIndex = cart.findIndex((product, i) => product.id === productId)
      const newCart = cart

      newCart.splice(productIndex, 1)
      
      setCart([...newCart])  
  }

  return (
    <div className="cart-item" style={{fontSize: 50}}>
      <img src={picture} alt={title} style={{fontSize: 20}} />
      <div>
        <h4>{title}</h4>
        <h4 className="item-price" style={{fontSize: 20}}>${price}</h4>
        {/* remove button onClick={() => remove()} */}
        <button className="remove-btn"style={{fontSize: 20}} onClick={() => removeItem(id)}>remove</button>
      </div>
      <div>
        {/* increase amount */}
        <button className="amount-btn" style={{fontSize: 20, width:50}} onClick={() => incrementAmount()}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M10.707 7.05L10 6.343 4.343 12l1.414 1.414L10 9.172l4.243 4.242L15.657 12z" />
          </svg>
        </button>
        {/* amount */}
        <p className="amount" style={{fontSize: 20, width:50} }>{amount}</p>
        {/* decrease amount */}
        <button className="amount-btn" style={{fontSize: 20, width:50}} onClick={() => decrementAmount()}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default CartItem;