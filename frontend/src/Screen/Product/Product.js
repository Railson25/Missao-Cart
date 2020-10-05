import React, { useContext, useEffect, useState } from 'react'

import {CartContext} from '../../context/Cart'
import api from '../../services/api'
import './style.css'

import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';

import { Link } from 'react-router-dom';


const useStyles = makeStyles({
  root: {
    maxWidth: "100%",
  },
  media: {
    height: 140,
  },
});

function App() {
  const[ cart, setCart, totalValue, setTotalValue] = useContext(CartContext)
  const [products, setProducts] = useState([]) 
  const classes = useStyles();


  useEffect(() => {
    api.get('/products').then(response => {
      setProducts(response.data)
    })
  }, [])

  const addToCart = (product) => {
    setCart(currentCart => [...currentCart, product])

  }

  return(
    <Card className={classes.root}>
    <div className="grid-container">
      <header className="row">
        <div>
          <a className="brand" href="/">
            Shopping
          </a>
        </div>
        <div>
          <Link to={'/Cart'}>
            <AddShoppingCartIcon 
              color="primary" 
              style={{ fontSize: 40 }}
            >{Object.keys(cart).length}</AddShoppingCartIcon>
          </Link> 
        </div>
      </header>
      <main>
        <div>
          <div className="row center">
            {products.map((product) =>(
              <div key={product.id} className="card">
                <Link to={`/ProductInfo/${product.id}`}>
                  <img
                    className="medium"
                    src={product.picture}
                    alt={product.title}
                  />
                </Link>
                <div className="card-body">
                  <Link to={`/ProductInfo/${product.id}`}>
                    <h2>{product.title}</h2>
                  </Link>
                  <div className="price">R${product.price}</div>

                    <button type='button' onClick={() => addToCart(product)}>Add To cart</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <footer className="row center">All right reserved</footer>
    </div>
    </Card>
  )
}

export default App